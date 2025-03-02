import {
  smoothScrollConfig
} from './configs.js';

import {
  iosVhFix
} from './utils.js';

import {
  initScrollObserver,
} from './scroll-observer.js';

import {
  initBurgerMenu,
} from './burger-menu.js';

const initSiteSettings = () => {
  iosVhFix();
  initScrollObserver();
  initBurgerMenu();
  new SmoothScroll( 'a[href*="#"]', smoothScrollConfig );
  [ '[data-gallery]' ].map( ( item ) => baguetteBox.run( item ) );
};

export {
  initSiteSettings,
};
