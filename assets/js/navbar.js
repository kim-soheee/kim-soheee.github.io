let burger = document.querySelector('.burger');
let navLinks = document.querySelector('.navbar-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});