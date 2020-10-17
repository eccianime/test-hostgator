import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./common/globalStyle";

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);