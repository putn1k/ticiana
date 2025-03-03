import {
  initTabs
} from './utils.js';

const arrTabs = [ {
  id: 'offers'
} ];

export const initAllTabs = () => {
  arrTabs.forEach( ( {
    id
  } ) => {
    initTabs( id );
  } );
};
