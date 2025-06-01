import {
  observerConfig,
} from './configs.js';

const scrollTopNode = document.querySelector( '#scroll-top' );
const siteHeaderNode = document.querySelector( '.site-header' );
const siteTopNode = document.querySelector( '#site-top' );

const showScrolTop = () => {
  scrollTopNode.classList.add( 'scroll-top--show' );
};

const hideScrolTop = () => {
  scrollTopNode.classList.remove( 'scroll-top--show' );
};

const markFilled = () => {
  siteHeaderNode.classList.add( 'site-header--filled' );
};
const unmarkFilled = () => {
  siteHeaderNode.classList.remove( 'site-header--filled' );
};

const initItemObserver = ( targetNode, observeNode, isTrueFn, isFalseFn, config ) => {
  if ( !targetNode || !observeNode ) return;
  const callback = ( entries ) => {
    entries.forEach( ( entry ) => {
      ( !entry.isIntersecting ) ? isTrueFn(): isFalseFn();
    } );
  };
  new IntersectionObserver( callback, config ).observe( observeNode );
};

export const initScrollObserver = () => {
  const stopLogoAnimationBlock = document.querySelector( '[data-stop-animation]' );
  const offset = stopLogoAnimationBlock ? ( stopLogoAnimationBlock.scrollHeight - siteHeaderNode.scrollHeight / 2 ) : 0;
  initItemObserver( scrollTopNode, siteTopNode, showScrolTop, hideScrolTop, observerConfig.scrollTop );
  initItemObserver( siteHeaderNode, siteTopNode, markFilled, unmarkFilled, {
    rootMargin: `${offset}px`,
    threshold: 1,
  }, );
};