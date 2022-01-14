function tabs() {
    const slides = document.querySelectorAll('.prodacts_slider_wrapper_cards_item');
    const prevBtn = document.querySelector('.prodacts_slider_btns_prev');
    const nextBtn = document.querySelector('.prodacts_slider_btns_next');
    const sliderWrapper = document.querySelector('.prodacts_slider_wrapper');
    const slidesField = document.querySelector('.prodacts_slider_wrapper_cards');
    const width = window.getComputedStyle(sliderWrapper).width;
    let offset = 0;
    console.log(width);

    slidesField.style.width = 100 * slides.length + '%';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    nextBtn.addEventListener('click', () => {
        if(offset == deleteNotDigits(width)*(slides.length-1)) {
            offset = 0;
        }
        else {
            offset += deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    prevBtn.addEventListener('click', () => {
        if(offset == 0) {
            offset = deleteNotDigits(width)*(slides.length-1);
        }
        else {
            offset -= deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
    });
}

export default tabs;