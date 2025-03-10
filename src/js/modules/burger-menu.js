import {
  isEscKey,
  lockScroll,
  unlockScroll,
} from './utils.js';

const burgerBtn = document.querySelector( '.site-header__burger' );
const burgerMenu = document.querySelector( '.burger-menu' );
const OPEN_MENU_CLASSNAME = 'is-open';

const openMenu = () => {
  lockScroll();
  burgerBtn.classList.add( OPEN_MENU_CLASSNAME );
  burgerMenu.classList.add( OPEN_MENU_CLASSNAME );
};

const closeMenu = () => {
  burgerBtn.classList.remove( OPEN_MENU_CLASSNAME );
  burgerMenu.classList.remove( OPEN_MENU_CLASSNAME );
  unlockScroll();
};

const burgerBtnHandler = () => {
  burgerBtn.classList.contains( OPEN_MENU_CLASSNAME ) ?
    closeMenu() :
    openMenu();
};

const onEscKeydown = ( evt ) => {
  if ( burgerBtn.classList.contains( OPEN_MENU_CLASSNAME ) && isEscKey( evt ) ) {
    closeMenu();
  }
};

export const initBurgerMenu = () => {
  if ( burgerBtn && burgerMenu ) {
    burgerBtn.addEventListener( 'click', burgerBtnHandler );
    document.addEventListener( 'keydown', onEscKeydown );
  }
};
