import { useStaticRendering } from 'mobx-react';

import UserStore from './UserStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export default function initializeStore(initialData = {}) {
  if (isServer) {
    console.log("Houston, we are serverside")
   
    return {
      UserStore: new UserStore(initialData),
    };
  }
  if (store === null) {
    console.log("Houston, we are clientside")
    store = {
        UserStore: initialData.UserStore,
    };
  }

  return store;
}