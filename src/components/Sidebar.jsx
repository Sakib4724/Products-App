import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import { AiOutlineProduct } from "react-icons/ai";
import { LuGitCompare } from "react-icons/lu";

const Sidebar = () => (

    <div className="sidebar">
        <ul className="sidebar-menu">
            <li className="sidebar-item">
                <Link to="/product-details"><AiOutlineProduct /> Product Details</Link>
            </li>
            <li className="sidebar-item">
                <Link to="/compare-products"><LuGitCompare /> Compare Products</Link>
            </li>
        </ul>
    </div>
);

export default Sidebar;
