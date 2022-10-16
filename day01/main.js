'use strict'
const btnMobileMenu = document.querySelector('.js__btn-mobile-menu')
const modal = document.querySelector('.js__modal')
const mobileMenu = document.querySelector('.js__mobile-menu')
const xMark = document.querySelector('.js__btn-close')
function showMobileMenu() {
    modal.style.display = 'block'
    mobileMenu.style.display = 'block'
}
function hideMobileMenu() {
    modal.style.display = 'none'
    mobileMenu.style.display = 'none'
}
btnMobileMenu.addEventListener('click', showMobileMenu)
modal.addEventListener('click', hideMobileMenu)
xMark.addEventListener('click', hideMobileMenu)
mobileMenu.addEventListener('click', function(e){
    e.stopPropagation();
})