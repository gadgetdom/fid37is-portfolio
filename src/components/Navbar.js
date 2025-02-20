import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import "../App.css";
import { FaGithub, FaXTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

function Navbar({ name, phoneNumber }) {
    const [firstName, lastName] = name.split(" ");
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <nav className="navbar">
            <div className="navbar-name">
                <Link to="/">
                    <span className="name-first no-select">{firstName}</span>
                    <span className="name-last no-select">{lastName}</span>
                </Link>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <div className={`hamburger-line ${menuOpen ? "open" : ""}`}></div>
                <div className={`hamburger-line ${menuOpen ? "open" : ""}`}></div>
                <div className={`hamburger-line ${menuOpen ? "open" : ""}`}></div>
            </div>

            <div className={`navbar-menu no-select ${menuOpen ? "open" : ""}`}>
                <Link
                    to="/devops"
                    className={isActive("/devops")}
                    onClick={() => setMenuOpen(false)}
                >
                    DevOps
                </Link>
                <Link
                    to="/work"
                    className={isActive("/myworks")}
                    onClick={() => setMenuOpen(false)}
                >
                    MyWorks
                </Link>
            </div>

            <div className="navbar-contact no-select">
                <div className="icon-container">
                    <a href={`https://github.com/fid37is`} target="_blank" rel="noopener noreferrer" className="icon-link">
                        <FaGithub />
                    </a>
                    <a href={`https://x.com/fid37is`} target="_blank" rel="noopener noreferrer" className="icon-link">
                        <FaXTwitter />
                    </a>
                    <a href={`https://linkedin.com/in/fid37is`} target="_blank" rel="noopener noreferrer" className="icon-link">
                        <FaLinkedinIn />
                    </a>
                    <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="icon-link">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;