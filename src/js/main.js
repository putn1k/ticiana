import {
  initSiteSettings
} from './modules/settings.js';
import {
  initModals
} from './modules/modal.js';
import {
  initSliders
} from './modules/slider.js';
import {
  initAllTabs
} from './modules/tabs.js';
import {
  validateForms
} from './modules/validate.js';

document.addEventListener( 'DOMContentLoaded', () => {
  initSiteSettings();

  window.addEventListener( 'load', () => {
    validateForms();
    initModals();
    initSliders();
    initAllTabs();
  } );
} );
