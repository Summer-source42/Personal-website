import React from "react";
import "./footer.css";

const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Summer</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">
                    About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">
                    Skills</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">
                    Contact
                    </a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/thesource05?igsh=MTk2a2VsbzVzNzZ2aQ" className="footer_social-icon" target="_blank"> 
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://www.whatsapp.com/" className="footer_social-icon" target="_blank">
                    <i className="bx bxl-whatsapp"></i>
                </a>

                <a href="https://www.github.com/Summer-source42" className="footer_social-icon" target="_blank"> 
                    <i className="uil uil-github-alt"></i>
                </a>

                <a href="https://www.twitter.com/" className="footer_social-icon" target="_blank"> 
                    <i className="bx bxl-twitter"></i>
                </a>
            </div>

            <span className="footer__copy"> &#169; TheSource. Al
            right reserved</span>
        </div>
    </footer>
    )
}

export default Footer