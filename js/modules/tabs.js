function tabs() {
    const slides = document.querySelectorAll('.prodacts_slider_wrapper_cards_item');
    const prevBtn = document.querySelector('.prodacts_slider_btns_prev');
    const nextBtn = document.querySelector('.prodacts_slider_btns_next');
    const sliderWrapper = document.querySelector('.prodacts_slider_wrapper');
    const slidesField = document.querySelector('.prodacts_slider_wrapper_cards');
    const width = window.getComputedStyle(sliderWrapper).width;
    let offset = 0;
    let slideIndex = 1;

    slidesField.style.width = 100 * slides.length + '%';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    function currentSlide(width) {
        if(offset == deleteNotDigits(width)*(slides.length-1)) {
            offset = 0;
        }
        else {
            offset = offset + deleteNotDigits(width);
        }
    }

    nextBtn.addEventListener('click', () => {
        currentSlide(width);

        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == slides.length) {
            slideIndex = 1;
        }
        else {
            slideIndex ++;
        }
    });

    prevBtn.addEventListener('click', () => {
        currentSlide(width);

        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == 1) {
            slideIndex = slides.length;
        }
        else {
            slideIndex --;
        }
    });
}

export default tabs;