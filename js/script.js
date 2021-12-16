window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_navigation_menu'),
    menuItem = document.querySelectorAll('.header_navigation_menu_item'),
    hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('header_navigation_menu_active');
    });
    menuItem.forEach(item => {
    item.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('header_navigation_menu_active');
    })
    })
})