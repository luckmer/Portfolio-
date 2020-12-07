import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Index from "./Styles/GlobalStyle/GlobalStyle";
import Store from "./Store/Store";
import { Provider } from "react-redux";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
        <Index/>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
