import React from 'react';

import 'index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from 'n1-main/m1-ui/App';
import { store } from 'n1-main/m2-bll/a1-redux-store/store';
import reportWebVitals from 'reportWebVitals';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);

reportWebVitals();
