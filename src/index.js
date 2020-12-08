import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import Index from "./Styles/GlobalStyle/GlobalStyle";
import Store from "./Store/Store";
import { Provider } from "react-redux";


ReactDOM.render(
  <Router>
    <Provider store={Store}>
        <Index/>
        <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
