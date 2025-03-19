const boby = document.querySelector('body');
const burgerMenuCheck = document.querySelector('.header-burger-menu-bth');
const headerRight = document.querySelector('.header-right');

burgerMenuCheck.addEventListener('click', () => {
    addClassActive(boby);
    addClassActive(burgerMenuCheck);
    addClassActive(headerRight);
})

function addClassActive(element) {
        element.classList.toggle('active');
};