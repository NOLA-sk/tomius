function dropdown() {
    const btn = document.querySelector('.dropdown_menu_btn');
    const submenu = document.querySelector('.dropdown_menu_submenu');
    const dropdown = document.querySelector('.dropdown');
    // const mrBottom = window.getComputedStyle(dropdown).marginBottom;

    // function deleteNotDigits(str) {
    //     return +str.replace(/\D/g, '');
    // } 

    btn.addEventListener('click', () => {
        submenu.classList.toggle('dropdown_active');
        dropdown.classList.toggle('dropdown_bottom');

        // if(deleteNotDigits(mrBottom) == 35) {
        //     dropdown.style.marginBottom = '190px';
        // }       
    });
}

export default dropdown;