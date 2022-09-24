import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Button } from "../Button";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link className="brand" to="/" onClick={closeMobileMenu}>
                    <a href="https://imgur.com/HKnInnG">
                        <img
                            src="https://i.imgur.com/RtWx3ca.png"
                            title="Sejdo Marble"
                            alt="Sejdo brand"
                            width="140"
                        />
                    </a>
                </Link>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link
                            className="nav-links"
                            to={"/"}
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-links"
                            to={"/services"}
                            onClick={closeMobileMenu}
                        >
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-links"
                            to={"/products"}
                            onClick={closeMobileMenu}
                        >
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-links"
                            to={"/about"}
                            onClick={closeMobileMenu}
                        >
                            About us
                        </Link>
                    </li>
                    <Link
                        className="nav-link-contact"
                        to={"/contact"}
                        onClick={closeMobileMenu}
                    >
                        <button className="nav-item-contact">Contact Us</button>
                    </Link>
                </ul>
                <div className="contact">
                    <Link to={"/contact"} onClick={closeMobileMenu}>
                        <Button className="btn--primary">Contact Us</Button>
                    </Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <CgClose /> : <HiOutlineMenuAlt3 />}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
