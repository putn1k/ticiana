import {
  modalConfig,
} from './configs.js';

import {
  initModal,
} from './utils.js';

const setupServiceModal = ( modal ) => {
  if ( modal.starter ) {
    const card = modal.starter.closest( '.service-card' );
    const img = card.querySelector( '.service-card__img img' );
    const title = card.querySelector( '.service-card__title' );
    const modalImg = modal.openedWindow.querySelector( '#service-modal-image' );
    const modalTitle = modal.openedWindow.querySelector( '#service-modal-display' );
    const modalInput = modal.openedWindow.querySelector( '#service-modal-input' );

    modalImg.src = img ? img.src : '#';
    modalTitle.textContent = title.textContent;
    modalInput.value = title.textContent;
  }
};

const beforeOpenCb = ( modal ) => {
  switch ( modal.openedWindow.id ) {
    case 'order-service-modal':
      setupServiceModal( modal );
      break;
    default:
      return;
  }
};

const simpleModal = new HystModal( Object.assign( modalConfig, {
  beforeOpen: beforeOpenCb,
} ) );

const initModals = () => {
  initModal( simpleModal );
};

export {
  simpleModal,
  initModals,
};