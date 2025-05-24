import HystModal from 'hystmodal';
import {
  modalConfig,
} from './configs.js';

import {
  initModal,
} from './utils.js';

import {
  setupVideo
} from './video-handler.js';

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

const setupVideoModal = ( modal ) => {
  if ( modal.starter ) {
    const video = modal.openedWindow.querySelector( '.modal__video-container' );
    const card = modal.starter.closest( '[data-video]' );
    const posterSrc = card.dataset.poster;
    const videoSrc = card.dataset.src;
    video.innerHTML = '';
    if ( card.classList.contains( 'is-iframed' ) ) {
      video.insertAdjacentHTML( 'afterbegin', `
        <div class="video-container is-iframed"
            data-src="${videoSrc}">
          <img class="video-container__poster"
              src="${posterSrc}"
              alt="" />
          <button class="video-container__btn"
                  aria-label="Запустить видео">
          </button>
        </div>
        ` );
      setupVideo( video.querySelector( '.video-container' ) );
    } else {
      video.insertAdjacentHTML( 'afterbegin', `
        <div class="video-container is-created">
          <video width="100%"
                  preload="metadata"
                  poster="${posterSrc}"
                  playsinline=""
                  controls=""
                  allow="clipboard-write; fullscreen; picture-in-picture">
            <source src="${videoSrc}"></video>
        </div>
        ` );
    }

  }
};

const beforeOpenCb = ( modal ) => {
  switch ( modal.openedWindow.id ) {
    case 'order-service-modal':
      setupServiceModal( modal );
      break;
    case 'video-modal':
      setupVideoModal( modal );

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