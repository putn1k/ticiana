import {
  isEscKey,
} from './utils.js';

const searchTrigger = document.querySelector( '.site-header__search-trigger' );
const searchForm = document.querySelector( '.site-header__search-form' );
const OPEN_MENU_CLASSNAME = 'site-header__search-form--show';

const toggleSearchForm = () => {
  searchForm.classList.toggle( OPEN_MENU_CLASSNAME );
  if ( searchForm.classList.contains( OPEN_MENU_CLASSNAME ) ) {
    searchForm.querySelector( '[type="search"]' ).focus();
  }
};

const hideSearchForm = () => {
  searchForm.classList.remove( OPEN_MENU_CLASSNAME );
};

const onEscKeydown = ( evt ) => {
  if ( searchForm.classList.contains( OPEN_MENU_CLASSNAME ) && isEscKey( evt ) ) {
    hideSearchForm();
    searchTrigger.focus();
  }
};

export const initSiteSearch = () => {
  if ( searchTrigger && searchForm ) {
    searchTrigger.addEventListener( 'click', toggleSearchForm );
    document.addEventListener( 'keydown', onEscKeydown );
  }
};