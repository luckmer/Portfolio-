import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import Index from "./Styles/GlobalStyle/GlobalStyle";
import Store from "./Store/Store";
import { Provider } from "react-redux";
import Cursor from "./Components/Cursor";



ReactDOM.render(

    <React.StrictMode>
            <Router>
                <Provider store={Store}>
                    <Cursor/>
                    <Index/>
                    <App />
                </Provider>
            </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
