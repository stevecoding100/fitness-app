import React, { useState } from "react";

import "../App.css";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <div
                className={`menu-icon ${isOpen ? "open" : ""}`}
                onClick={toggleMenu}
            >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            {isOpen && (
                <div className="menu-items">
                    <a href="/">Home</a>

                    <a href="#exercises">Exercises</a>

                    <a href="/">Body Calculator</a>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
