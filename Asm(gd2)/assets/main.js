const btn__Menu = document.querySelector(".btn__menu-mobile");
const menu__Mobile = document.querySelector(".menu__mobile");
const close__Mobile = document.querySelector(".close")
const overlay = document.querySelector(".nav__overlay");

// Mở menu mobile
console.log(overlay);
btn__Menu.onclick = function(){
    menu__Mobile.style.transform = 'translateX(0)';
}

// Đóng menu mobile
close__Mobile.onclick = function(){
    menu__Mobile.style.transform = 'translateX(-100%)';
}

overlay.onclick = function(){
    menu__Mobile.style.transform = 'translateX(-100%)';
}