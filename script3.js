function readText(text) {
    var speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'es-ES'; // Configura el idioma a español
    window.speechSynthesis.speak(speech);
}

function goToHome() {
    window.location.href = "http://127.0.0.1:5500/index.html"; // Reemplaza con la URL de tu página de inicio
}

function goToPage(pageId) {
    // Ocultar todas las páginas
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('show');
    });
    
    // Mostrar la página seleccionada
    var page = document.getElementById(pageId);
    page.classList.add('show');
}
