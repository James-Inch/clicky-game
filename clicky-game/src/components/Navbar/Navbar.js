import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
            <ul className="navbar-nav">
                <li>
                    <h1>Clicky Game</h1>
                </li>
                <li>
                    <h2>Your current score is</h2>
                </li>
                <li>
                    <h2> Score:  | Top Score: </h2>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
