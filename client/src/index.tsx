import React from "react";
import ReactDOM from "react-dom";

import(/* webpackChunkName: "app" */ "./app/App")
.then(({ App }) => {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>, 
    document.getElementById("root"))
});





