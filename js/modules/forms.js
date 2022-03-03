import modal from "./modal";

function formModal() {
    const form = document.querySelector('.form');

    const message = {
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    function thanksMessage(message) {
        const modalDialog = document.querySelector('.wrapper');

        modalDialog.classList.add('modal_close');
        
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('wrapper');
        thanksModal.innerHTML = `
                <div class="wrapper">
                    <div class="modal_close" data-close>×</div>
                    <div class="modal_title">${message}</div>
                </div>
            `;
    }
}

export default formModal;