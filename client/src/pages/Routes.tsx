import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Main } from "../containers/Main";
import { Create } from "../containers/Create"; 
import { Update } from "../containers/Update";

export const Routes = (): JSX.Element => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/create" component={Create} />
                    <Route path="/update/:id" component={Update} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    );
};




