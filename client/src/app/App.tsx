import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { AllRoutes } from "../pages/AllRoutes";
import { RootReducer } from "../global/RootReducer";

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <Provider store={RootReducer}>
                <AllRoutes />
            </Provider>
        </React.Fragment>
    );
};




