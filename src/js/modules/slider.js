import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '#main-hero', sliderConfig.hero );
  initSlider( '#offer-hits', sliderConfig.gallery );
  initSlider( '#offer-news', sliderConfig.gallery );
  initSlider( '#offer-sales', sliderConfig.gallery );
  initSlider( '#complete-projects', sliderConfig.gallery );
  initSlider( '#our-testimonials', sliderConfig.galleryBig );
};

export {
  initSliders,
};