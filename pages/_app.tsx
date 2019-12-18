import React from 'react';
import App from 'next/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/core';

import { AppStateReducer } from '../src/shared/states/AppState';
import { AppColour } from '../src/shared/constants/AppColour';

const store = createStore(AppStateReducer);

const globalStyle = css`
  body {
    margin: 0;
    background: url('/images/bg.jpg');
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: ${AppColour.PRIMARY};
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Global styles={globalStyle} />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default MyApp;
