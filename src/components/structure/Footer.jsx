import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer-container">
            <div className="header-container">
                <h1 className="text-h1">
                    Sejdo Marble - SH3 Bitinckë, Bilisht, 7008 Albania
                </h1>

                <p className="text-p">
                    <Link className="text-p-link" to="/contact">
                        Contact us for more!
                    </Link>
                </p>
            </div>
            <div className="social-icons">
                <Link
                    className="social-icon-link"
                    to={{
                        pathname: "https://www.facebook.com/MermerSejdo/",
                    }}
                    target="_blank"
                    aria-label="Facebook"
                >
                    <FaFacebook />
                </Link>
                <Link
                    className="social-icon-link"
                    to={{
                        pathname:
                            "https://www.instagram.com/sejdomarble/?hl=en",
                    }}
                    target="_blank"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </Link>
            </div>
            <div className="privacy-policy-container">
                <p className="privacy-policy">
                    <Link className="privacy-policy-link" to="/privacy">
                        Privacy Policy
                    </Link>
                </p>
            </div>
            <div className="website-rights">
                SEJDO © 2022: All rights reserved
            </div>
        </div>
    );
}

export default Footer;
