require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import showMenu from './modules/menu';
import showMoreDescr from './modules/more-btn';
import tabs from './modules/tabs';
import sliders from './modules/sliders';
import dropdown from './modules/dropdown';

document.addEventListener('DOMContentLoaded', () => {
    showMenu();
    if(document.querySelector('#main-page')) {
        showMoreDescr();
        tabs();
        sliders({
            slide: '.first_slider_item', 
            prevArrow: '.first_prev_btn', 
            nextArrow: '.first_next_btn', 
            wrapper: '.first_slider_wrapper', 
            field: '.first_slider_field'
        });
        sliders({
            slide: '.second_slider_item', 
            prevArrow: '.second_prev_btn', 
            nextArrow: '.second_next_btn', 
            wrapper: '.second_slider_wrapper', 
            field: '.second_slider_field'
        });
        sliders({
            slide: '.third_slider_item', 
            prevArrow: '.third_prev_btn', 
            nextArrow: '.third_next_btn', 
            wrapper: '.third_slider_wrapper', 
            field: '.third_slider_field'
        });
    }
    if(document.querySelector('#about-comp')) {
        dropdown();
    }    
});

