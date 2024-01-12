import React, { useState } from "react";
import "./header.css";

const Header = () => {
    /* ================== Toggle Menu ============ */
    const[Toggle, showMenu] = useState(false);

    return ( 
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Summer</a>

                <div className={Toggle ? "nav__menu show-menu" : 
                "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__items">
                            <a href="#Home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__items">
                            <a href="#About" className="nav__link active-link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__items">
                            <a href="#Skills" className="nav__link active-link">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav__items">
                            <a href="#Service" className="nav__link active-link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Service
                            </a>
                        </li>

                        <li className="nav__items">
                            <a href="portfolio" className="nav__link active-link">
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>

                        <li className="nav__items">
                            <a href="#contact" className="nav__link active-link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header