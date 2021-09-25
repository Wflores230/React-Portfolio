import React from "react";
import {Link} from 'react-scroll'
//React Imports from font awesome 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
            <p className="navbar-brand" href="#">Will's Portfolio</p>
            <button className="navbar-toggler" onclick="movebutton()" data-toggle="collapse" data-target="#navbarMenu">
                <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarMenu">
              <ul className="navbar-nav">
                    <li className="nav-item active">
                    <Link smooth={true} to="header" offset={-110} className="nav-link" href="#HOME">HOME</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth={true} to="about" offset={-110} className="nav-link" href="#ABOUT">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth={true} to="services" offset={-110} className="nav-link" href="#SERVICES">SERVICES</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth={true} to="work" offset={-110} className="nav-link" href="#WORK">WORK</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#CONTACT">CONTACT</Link>
                    </li>
              </ul>
            </div>
        </nav>
    )
}

export default Navbar
