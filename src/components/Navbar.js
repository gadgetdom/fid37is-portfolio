import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ name, phoneNumber }) {
    const [firstName, lastName] = name.split(' ');
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };
    
    return (
        <nav className="navbar">
        <div className="navbar-name">
            <Link to="/">
            <span className="name-first">{firstName}</span>
            <span className="name-last">{lastName}</span>
            </Link>
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
            <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
        </div>
        
        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
            <Link 
            to="/devops" 
            className={isActive('/devops')} 
            onClick={() => setMenuOpen(false)}
            >
            DevOps
            </Link>
            <Link 
            to="/designs"
            className={isActive('/designs')} 
            onClick={() => setMenuOpen(false)}
            >
            UI/UX Designs
            </Link>
            <Link 
            to="/frontend"
            className={isActive('/frontend')}
            onClick={() => setMenuOpen(false)}
            >
            Front-End
            </Link>
        </div>
        
        <div className="navbar-contact">
            <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="WhatsApp" className="whatsapp-icon" />
            </a>
        </div>
        </nav>
    );
}

export default Navbar;