/*menu navbar*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    toogleNavbar()
})

function toogleNavbar(){
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

function removeMenuNavbar(){
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

// ===============scroll sections active linlks================ 
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })

            removeMenuNavbar()
        }
    });
}

// ===============scrollreavel================ 

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .about-content .p3', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-content, .portifolio-container, .contact form, .about-content .p1', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content .p2', { origin: 'left' });

// ===============Typed js================ 

const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Web', 'Frontend'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});