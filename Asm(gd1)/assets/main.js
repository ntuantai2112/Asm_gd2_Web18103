const menu_btn = document.querySelector('#menu__mobile')

const nav_Menu = document.querySelector('.nav__mobile');

const close_Mobile = document.querySelector('.nav__mobile-close');

const header_Overlay = document.querySelector('.header__overlay');


menu_btn.onclick = function(){
    nav_Menu.style.transform = 'translateX(0)';
    header_Overlay.style.display = 'block';
}

close_Mobile.onclick = function(){
    nav_Menu.style.transform = 'translateX(-100%)';
    header_Overlay.style.display = 'none';

}

header_Overlay.onclick = function(){
    nav_Menu.style.transform = 'translateX(-100%)';
    header_Overlay.style.display = 'none';
}
