import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>Jungmo.</Link>

                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <NavLink to="/" className="navbar-link" onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to="/about" className="navbar-link" onClick={() => setIsOpen(false)}>About</NavLink>
                    <NavLink to="/projects" className="navbar-link" onClick={() => setIsOpen(false)}>Projects</NavLink>
                    <NavLink to="/publications" className="navbar-link" onClick={() => setIsOpen(false)}>Publications</NavLink>
                    <ThemeToggle />
                </div>

                <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
