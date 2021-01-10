import React,{useEffect} from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import {routes } from "./routes";
import {NavBar} from "./Export";
import { AnimatePresence } from "framer-motion";
import { SwitchPage } from "./Components/NextPanel";

function App(){
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <AnimatePresence exitBeforeEnter >
            <SwitchPage/>
            <NavBar />
            <Switch location={location} key={location.pathname}>
                {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path} component={Component} />
                ))}
            </Switch>
        </AnimatePresence>
    );
}
export default App;



