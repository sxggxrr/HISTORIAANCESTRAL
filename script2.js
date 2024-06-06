document.addEventListener('DOMContentLoaded', (event) => {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const languageSelect = document.getElementById('languageSelect');
    const speedRange = document.getElementById('speedRange');
    const textArea = document.getElementById('text');
    const bookSelect = document.getElementById('bookSelect');
    let synth = window.speechSynthesis;
    let utterance = null;
    let voices = [];

    const books = {
        book1: "El Principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry...",
        book2: "Moby-Dick es una novela del escritor estadounidense Herman Melville publicada en 1851...",
        book3: "Don Quijote de la Mancha es una novela escrita por el español Miguel de Cervantes Saavedra...",
    };

    const languages = ['en', 'es', 'fr', 'de', 'it', 'pt', 'zh', 'ja', 'ko', 'hi', 'ru', 'ar'];

    function populateVoiceList() {
        voices = synth.getVoices().filter(voice => {
            return languages.some(lang => voice.lang.startsWith(lang));
        });

        languageSelect.innerHTML = '';
        voices.forEach((voice, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${voice.name} (${voice.lang})`;
            languageSelect.appendChild(option);
        });

        if (voices.length === 0) {
            alert('No se encontraron voces de síntesis de voz disponibles. Por favor, intente recargar la página o usar un navegador diferente.');
        }
    }

    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    bookSelect.addEventListener('change', () => {
        const selectedBook = bookSelect.value;
        if (books[selectedBook]) {
            textArea.value = books[selectedBook];
        }
    });

    playPauseBtn.addEventListener('click', () => {
        if (synth.speaking) {
            if (synth.paused) {
                synth.resume();
                playPauseBtn.textContent = 'Pausar';
            } else {
                synth.pause();
                playPauseBtn.textContent = 'Leer';
            }
        } else {
            if (utterance) {
                synth.resume();
            } else {
                utterance = new SpeechSynthesisUtterance(textArea.value);
                utterance.voice = voices[languageSelect.value];
                utterance.rate = speedRange.value;
                utterance.onerror = (event) => {
                    console.error('SpeechSynthesisUtterance.onerror:', event);
                    alert('Ocurrió un error al intentar reproducir el texto. Por favor, intente nuevamente.');
                };
                synth.speak(utterance);
            }
            playPauseBtn.textContent = 'Pausar';
        }
    });

    languageSelect.addEventListener('change', () => {
        if (utterance) {
            utterance.voice = voices[languageSelect.value];
        }
    });

    speedRange.addEventListener('input', () => {
        if (utterance) {
            utterance.rate = speedRange.value;
        }
    });

    synth.addEventListener('end', () => {
        playPauseBtn.textContent = 'Leer';
        utterance = null;
    });
});
