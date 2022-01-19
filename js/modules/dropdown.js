function dropdown({menuBtn, dropdownSubmenu, container, cssClass}) {
    const btn = document.querySelector(menuBtn);
    const submenu = document.querySelector(dropdownSubmenu);
    const dropdownMenu = document.querySelector(container);
    const mb = cssClass;

    btn.addEventListener('click', () => {
        submenu.classList.toggle('dropdown_active');
        dropdownMenu.classList.toggle(mb);
    });
}

export default dropdown;