const initSiteVideo = () => {
  const videos = document.querySelectorAll( '.video-container:not(.is-created)' );
  if ( videos.length < 1 ) return;

  for ( let i = 0; i < videos.length; i++ ) {
    setupVideo( videos[ i ] );
  }
};

const setupVideo = ( video ) => {
  const poster = video.querySelector( '.video-container__poster' );
  const btnNode = video.querySelector( '.video-container__btn' );
  const sourceLink = video.dataset.src;

  btnNode.addEventListener( 'click', () => {
    if ( video.classList.contains( 'is-iframed' ) ) {
      const iframeElem = createIframe( sourceLink );

      video.appendChild( iframeElem );
    } else {
      const videoElem = createVideo( {
        poster,
        sourceLink
      } );

      video.appendChild( videoElem );
    }
    poster.remove();
    btnNode.remove();
    video.classList.add( 'is-created' );
  } );
};

const createIframe = ( link ) => {
  const element = document.createElement( 'iframe' );

  element.setAttribute( 'src', link );
  element.setAttribute( 'width', document.documentElement.scrollWidth );
  element.setAttribute( 'webkitAllowFullScreen', '1' );
  element.setAttribute( 'mozallowfullscreen', '1' );
  element.setAttribute( 'allowFullScreen', '1' );
  element.setAttribute( 'allow', 'autoplay; encrypted-media; fullscreen; picture-in-picture' );

  return element;
};

const createVideo = ( data ) => {
  const element = document.createElement( 'video' );
  const srcElement = document.createElement( 'source' );

  srcElement.setAttribute( 'src', data.sourceLink );
  element.setAttribute( 'width', '100%' );
  element.setAttribute( 'preload', 'metadata' );
  element.setAttribute( 'poster', data.poster.src );
  element.setAttribute( 'playsinline', '' );
  element.setAttribute( 'controls', '' );
  element.setAttribute( 'allow', 'clipboard-write; fullscreen; picture-in-picture' );
  element.appendChild( srcElement );

  return element;
};

export {
  setupVideo,
  createIframe,
  createVideo,
  initSiteVideo
};