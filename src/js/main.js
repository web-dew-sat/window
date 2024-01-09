import './slider';
import  modals  from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.decoration_slider', '.no_click', '.decoration_content > .row > div', 'after_click');
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    forms();
});

