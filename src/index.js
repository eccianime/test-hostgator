import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./common/globalStyle";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import planReducer from './reducers/planReducer';

const store = createStore(
  planReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);