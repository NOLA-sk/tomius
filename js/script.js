require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import showMenu from './modules/menu';
import showMoreDescr from './modules/more-btn';
import tabs from './modules/tabs';

document.addEventListener('DOMContentLoaded', () => {
    showMenu();
    showMoreDescr();
    tabs();
    
});

