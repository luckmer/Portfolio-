import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import {routes } from "./routes";
import {NavBar} from "./Export";
function App(){

    const location = useLocation();
    return (
        <section >
            <NavBar/>
            <Switch location={location} key={location.pathname}>
                {routes.map(({ path, Component}) => (
                    <Route key={path} exact path={path} component={Component}  />
                ))}
            </Switch>
        </section>
    );
}

export default App;



