import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import {routes } from "./routes";
import { AnimatePresence } from 'framer-motion';
import {NavBar} from "./Export";



function App(){

    const location = useLocation();
    return (
        <>
            <NavBar/>
            <AnimatePresence exitBeforeEnter >
                <Switch location={location} key={location.pathname}>
                    {routes.map(({ path, Component}) => (
                        <Route key={path} exact path={path} component={Component}  />
                    ))}
                </Switch>
            </AnimatePresence>
        </>
    );
}

export default App;



