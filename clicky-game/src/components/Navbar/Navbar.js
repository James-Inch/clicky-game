import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navdiv">
            <ul className="navbar-nav">
                <li className="navTitle nav-item px-4">
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
