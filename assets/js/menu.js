// Меню бургер
const buttonMenu = document.querySelector('.header__toggler-mobile-menu');
const menuBody = document.querySelector('.menu');
if (buttonMenu) {
  buttonMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('content--lock');
    menuBody.classList.toggle('menu--active');
    buttonMenu.classList.toggle('header__toggler-mobile-menu--active');
  });
}