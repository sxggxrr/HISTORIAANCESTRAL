function toggleMenu() {
    const menu = document.querySelector('.side-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    menu.classList.toggle('active');
    menuToggle.classList.toggle('open');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');
    const menu = document.querySelector('.side-menu');
    menu.classList.remove('active');
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.classList.remove('open');
}
document.addEventListener('click', function(event) {
    const sideMenu = document.querySelector('.side-menu');
    const menuToggle = document.querySelector('.menu-toggle');

    if (!sideMenu.contains(event.target) && event.target !== menuToggle) {
        sideMenu.classList.remove('active');
        menuToggle.classList.remove('open');
    }
});


function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');
    const menu = document.querySelector('.side-menu');
    menu.classList.remove('active');
}

function search() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        if (section.innerText.toLowerCase().includes(query)) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const bubbleCount = 50;
    const body = document.body;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubbles');
        bubble.style.top = `${Math.random() * 100}%`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.width = `${Math.random() * 20 + 10}px`;
        bubble.style.height = `${Math.random() * 20 + 10}px`;
        body.appendChild(bubble);
    }
});

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Gracias ${name} por tu mensaje. Te contactaremos pronto al correo: ${email}`);
    document.querySelector('form').reset();
}

function animateTitle() {
    const title = document.querySelector('h1');
    title.classList.add('active');
    setTimeout(function() {
        title.classList.remove('active');
    }, 500); // Duración de la animación en milisegundos
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('body').classList.add('loaded');
});

function animateTitle() {
    const title = document.querySelector('h1');
    title.classList.add('active');
    setTimeout(function() {
        title.classList.remove('active');
    }, 500);
}

function moveElement(element) {
    element.style.transform = 'translateX(50px)'; // Mueve el elemento 50px hacia la derecha
    setTimeout(function() {
        element.style.transform = 'translateX(0)'; // Vuelve el elemento a su posición original
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('body').classList.add('loaded');
});

function animateTitle() {
    const title = document.querySelector('h1');
    title.classList.add('active');
    setTimeout(function() {
        title.classList.remove('active');
    }, 500);
}


let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('h1');
    title.addEventListener('mouseover', function() {
        this.style.color = '#ffcc00';
    });
    title.addEventListener('mouseout', function() {
        this.style.color = 'white';
    });

    const planets = document.querySelectorAll('.planet, .planet2, .planet3, .planet4');
    planets.forEach(planet => {
        planet.addEventListener('click', function() {
            this.style.background = 'radial-gradient(circle, #00ccff, #0066ff, #0033ff)';
            setTimeout(() => {
                this.style.background = 'radial-gradient(circle, #f0c674, #e5a656, #e0774d)';
            }, 500);
        });
    });
});

