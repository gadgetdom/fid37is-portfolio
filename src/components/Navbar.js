import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ name, phoneNumber }) {

    const nameIndex = name.indexOf(' ');
const firstName = name.substring(0, nameIndex);
const lastName = name.substring(nameIndex + 1);

    return (
        <nav className="navbar">
        <div className="navbar-name">
            <Link to="/">
            <span className="name-first">{firstName}</span>
            <span className="name-last">{lastName}</span>
            </Link>
        </div>
        <div className="navbar-menu">
            <Link to="/devops">DevOps</Link>
            <Link to="/designs">UI/UX Designs</Link>
            <Link to="/frontend">FrontEnd</Link>
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