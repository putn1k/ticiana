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

import {
  initSiteSearch,
} from './search-form.js';

import {
  initProductFilters,
} from './product-filters.js';

import {
  initSiteVideo,
} from './video-handler.js';

const initSiteSettings = () => {
  iosVhFix();
  initScrollObserver();
  initBurgerMenu();
  initSiteSearch();
  new SmoothScroll( 'a[href*="#"]', smoothScrollConfig );
  [ '[data-gallery]' ].map( ( item ) => baguetteBox.run( item ) );
  initProductFilters();
  initSiteVideo();
};

export {
  initSiteSettings,
};