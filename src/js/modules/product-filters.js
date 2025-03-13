import {
  isEscKey
} from './utils.js';

const showFilters = ( block ) => {
  block.classList.add( 'filter-form--open' );
};

const closeFilters = ( block ) => {
  block.classList.remove( 'filter-form--open' );
};

const setupDataMoreBtn = ( btn ) => {
  const list = btn.closest( '.filter-dropdown__list' );
  btn.addEventListener( 'click', ( evt ) => {
    evt.preventDefault();
    Array.from( list.children ).map( item => {
      if ( item.classList.contains( 'visually-hidden' ) ) {
        item.classList.remove( 'visually-hidden' );
      }
    } );
  } );
};

const onFilterBtnClick = ( evt ) => {
  evt.preventDefault();

  const filterForm = document.querySelector( '.filter-form' );
  showFilters( filterForm );
};

const onFilterCloseBtnClick = ( evt ) => {
  evt.preventDefault();

  const filterForm = document.querySelector( '.filter-form' );
  closeFilters( filterForm );
};

const onFilterFormClick = ( evt ) => {
  const filterForm = document.querySelector( '.filter-form' );
  if ( evt.target === filterForm ) {
    closeFilters( filterForm );
  }
};

const onEscKeydonwn = ( evt ) => {
  const filterForm = document.querySelector( '.filter-form' );
  if ( filterForm.classList.contains( 'filter-form--open' ) && isEscKey( evt ) ) {
    closeFilters( filterForm );
  }
};

const initDataMoreBtn = () => {
  document.querySelectorAll( '[data-more]' ).forEach( setupDataMoreBtn );
};

const initProductFilters = () => {
  const filtersNode = document.querySelector( '.product-filter' );
  if ( !filtersNode ) return;

  const filtersShowBtn = filtersNode.querySelector( '.product-filter__btn' );
  const filterCloseBtn = filtersNode.querySelector( '.filter-form__close' );
  const filterForm = filtersNode.querySelector( '.filter-form' );

  initDataMoreBtn();

  filtersShowBtn.addEventListener( 'click', onFilterBtnClick );
  filterCloseBtn.addEventListener( 'click', onFilterCloseBtnClick );
  filterForm.addEventListener( 'click', onFilterFormClick );
  document.addEventListener( 'keydown', onEscKeydonwn );
};

export {
  initProductFilters
};