function sliders({slide, prevArrow, nextArrow, wrapper, field}) {
    const slides = document.querySelectorAll(slide);
    const prevBtn = document.querySelector(prevArrow);
    const nextBtn = document.querySelector(nextArrow);
    const sliderWrapper = document.querySelector(wrapper);
    const slidesField = document.querySelector(field);
    const width = window.getComputedStyle(sliderWrapper).width;
    let offset = 0;
    let slideIndex = 3;
    // console.log(slides);

    slidesField.style.width = 33.333333 * slides.length + '%';
    
    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }    
    
    slides.forEach(slide => {
        slide.style.width = deleteNotDigits(width);
    });    

    function currentSlide(width) {
        if(offset == deleteNotDigits(width)*(slides.length-3)) {
            offset = 0;
        }
        else {
            offset += deleteNotDigits(width);
        }
    }    

    nextBtn.addEventListener('click', () => {
        currentSlide(width);
        console.log(offset);
        slidesField.style.transform = `translateX(-${offset/3}px)`;

        // if(slideIndex == slides.length) {
        //     slideIndex = 3;
        //     console.log(slideIndex);
        // }
        // else {
        //     slideIndex ++;
        //     console.log(slideIndex);
        // }        
    });

    prevBtn.addEventListener('click', () => {
        currentSlide(width);
        console.log(offset);
        slidesField.style.transform = `translateX(-${offset/3}px)`;

        // if(slideIndex == 3) {
        //     slideIndex = slides.length;
        //     console.log(slideIndex);
        // }
        // else {
        //     slideIndex --;
        //     console.log(slideIndex);
        // }
    });
}

export default sliders;