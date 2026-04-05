let burger = document.querySelector('.navbar-toggler');
let navLinks = document.querySelector('.navbar-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});