// Меню бургер
const buttonMenu = document.querySelector('.header__button');
const menuBody = document.querySelector('.menu');
if (buttonMenu) {
  buttonMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    menuBody.classList.toggle('_active');
    buttonMenu.classList.toggle('_active');
  });
}