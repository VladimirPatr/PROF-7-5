const menuBtn = document.querySelector('.header__menu');
const navMenu = document.querySelector('.navbar-menu')


// Открытие меню по клику
console.log(menuBtn)
menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menuBtn.classList.toggle('header__menu--active');
    navMenu.classList.toggle('navbar-menu--active')
})
