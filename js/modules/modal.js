function modal() {
    // const openModalBtn = document.querySelector('.header_navigation_btn_red');
    let openModalBtn = 0;
    const modal = document.querySelector('.modal');
    const closeModalBtn = document.querySelector('.modal_header_close');
    const modalFeild = document.querySelector('.wrapper');
    const modalWidth = window.getComputedStyle(modalFeild).width;

    console.log(modalWidth);

    function deleteNoDigits(str) {
        return +str.replace(/\D/g, '');
    }

    if (deleteNoDigits(modalWidth) > 300) {
        openModalBtn = document.querySelector('.first_modal_selector');
    }
    else {
        openModalBtn = document.querySelector('.second_modal_selector');
    }

    function openModal() {
        openModalBtn.addEventListener('click', () => {
            modal.classList.remove('modal_close');
            modal.classList.add('modal_open');
        });
    }
    
    function closeModal() {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('modal_open');
            modal.classList.add('modal_close');
        });
    }    

    openModal();
    closeModal();   

}

export default modal;