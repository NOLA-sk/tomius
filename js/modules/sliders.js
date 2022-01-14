function sliders({slide, prevArrow, nextArrow, wrapper, field}) {
    const slides = document.querySelectorAll(slide);
    const prevBtn = document.querySelector(prevArrow);
    const nextBtn = document.querySelector(nextArrow);
    const sliderWrapper = document.querySelector(wrapper);
    const slidesField = document.querySelector(field);
    const width = window.getComputedStyle(sliderWrapper).width;
    let offset = 0;
    let countSlides = 0;

    if(width > '460px') {
        slidesField.style.width = 33.333333 * slides.length + '%';
        countSlides = 3;        
    }
    else {
        if(width <= '460px' && width > '300px') {
            slidesField.style.width = 50 * slides.length + '%';
            countSlides = 2;
        }
        else {
            slidesField.style.width = 100 * slides.length + '%';
            countSlides = 1;
        }
    }    
    
    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }    
    
    slides.forEach(slide => {
        slide.style.width = deleteNotDigits(width);
    });

    nextBtn.addEventListener('click', () => {
        if(offset == deleteNotDigits(width)*(slides.length-countSlides)) {
            offset = 0;
        }
        else {
            offset += deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset/countSlides}px)`;      
    });

    prevBtn.addEventListener('click', () => {
        if(offset == 0) {
            offset = deleteNotDigits(width)*(slides.length-countSlides);
        }
        else {
            offset -= deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset/countSlides}px)`;
    });
}

export default sliders;