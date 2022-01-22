require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import showMenu from './modules/menu';
import showMoreDescr from './modules/more-btn';
import tabs from './modules/tabs';
import sliders from './modules/sliders';
import dropdown from './modules/dropdown';
import postInfo from './modules/projects';

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
        dropdown({
            menuBtn: '.dropdown_menu_btn',
            dropdownSubmenu: '.dropdown_menu_submenu',
            container: '.dropdown',
            cssClass:'dropdown_bottom'
        });
    }
    if(document.querySelector('#projects')) {
        showMoreDescr();
        dropdown({
            menuBtn: '.dropdown_btn_1',
            dropdownSubmenu: '.dropdown_submenu_1',
            container: '.dropdown_1',
            cssClass:'dropdown_bottom_1'
        });
        dropdown({
            menuBtn: '.dropdown_btn_2',
            dropdownSubmenu: '.dropdown_submenu_2',
            container: '.dropdown_2',
            cssClass:'dropdown_bottom_2'
        });
        dropdown({
            menuBtn: '.dropdown_btn_3',
            dropdownSubmenu: '.dropdown_submenu_3',
            container: '.dropdown_3',
            cssClass:'dropdown_bottom_3'
        });
        dropdown({
            menuBtn: '.dropdown_btn_4',
            dropdownSubmenu: '.dropdown_submenu_4',
            container: '.dropdown_4',
            cssClass:'dropdown_bottom_4'
        });        
    }
    if(document.querySelector('#project_page')) {
        postInfo();
    }
});

