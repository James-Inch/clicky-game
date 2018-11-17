import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
            <ul className="navbar-nav nav-item px-4">
                <li className="navTitle">
                    Clicky Game
                </li>
                <li className="navScore nav-item px-4">
                    Your current score is
                </li>
                <li className="navStats nav-item px-4">
                    Score:  | Top Score:
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
