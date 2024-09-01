import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

const Header = () => (
    <div className="navbar">
        <div className="logo">Sakify</div>
        <ul className="nav-items">
            <Link to="/">
                <li className="">Home</li>
            </Link>

            <Link to="/about">
                <li className="">
                    About
                </li>
            </Link>

            <Link to="/contact">
                <li className="">
                    Contact
                </li>
            </Link>
        </ul>
    </div>
);

export default Header;
