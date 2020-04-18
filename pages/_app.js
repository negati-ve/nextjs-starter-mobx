import React from 'react'
import App from 'next/app'
import { Provider } from 'mobx-react';
import initializeStore from '../stores/';
export default class MyApp extends App {
  static async getInitialProps(appContext) {
    const mobxStore = initializeStore();
    appContext.ctx.mobxStore = mobxStore;
    const appProps = await App.getInitialProps(appContext);
    appProps.pageProps.lang = 'en'
    console.log(appProps)
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }
  constructor(props) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={this.mobxStore}>
          <Component {...pageProps} />
      </Provider>
      
    )
  }
}
