const burger = document.querySelector('.burger-wrap');
const burgerMenu = document.querySelector('nav');
const html = document.querySelector('HTML');


burger.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    burger.classList.toggle('line-active');
    html.classList.toggle('htmlActive');
})