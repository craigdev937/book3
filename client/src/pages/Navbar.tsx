import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (): JSX.Element => (
    <React.Fragment>
        <nav>
            <ul>
                <Link to="/">Main</Link>
                <Link to="/create">Create</Link>
            </ul>
        </nav>
    </React.Fragment>
);



