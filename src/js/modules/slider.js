import baguetteBox from 'baguettebox.js';
import {
  Thumbs,
  EffectFade,
  Navigation
} from 'swiper/modules';
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
  initSlider( '#product-gallery-main', Object.assign( sliderConfig.product, {
    modules: [ Thumbs, EffectFade, Navigation ],
    on: {
      init: function() {
        baguetteBox.run( '#product-gallery-main' );
      },
      slidePrevTransitionEnd: function() {
        baguetteBox.destroy( '#product-gallery-main' );
        baguetteBox.run( '#product-gallery-main' );
      },
    },
    thumbs: {
      swiper: initSlider( '#product-gallery-thumbs', sliderConfig.productThumbs ),
    },
  } ) );
};

export {
  initSliders,
};