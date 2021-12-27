function showMoreDescr() {
    const btnMore = document.querySelector('.description_wrapper_btns_more');
    const descrText = document.querySelector('.hiden_text');
    
    btnMore.addEventListener('click', () => {
        descrText.classList.toggle('hide');
    });
}

export default showMoreDescr;