import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo-container">
                <Link to="/">
                    <img 
                        className="logo"
                        src="https://kalvium.community/images/sidebar-3d-logo.svg"
                        alt="K-logo"
                    />
                </Link>
            </div>
            <ul>
                <h3>
                    <Link to={"/contact"} className="link-tag" >Contact</Link>
                </h3>
                <h3>
                    <Link to={"/about"} className="link-tag" >About</Link>
                </h3>
            </ul>
        </div>
    );
};

export default Navbar;