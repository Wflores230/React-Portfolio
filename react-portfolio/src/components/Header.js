import React from "react"
import {Link} from 'react-scroll'
import Typed from "react-typed"; 


const Header = () => {
    return (
        <div id="header" className ="header-wrapper">
            <div className ="color-overlay"></div>
            <div className = "main-info">
                <h1>Web components and Development</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Marketing Campaigns", "Sneaker Reselling"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link to="contact" onclick="movebutton()" className="btn-main-offer" offset={-110}>Contact Me</Link>
            </div>
        </div>
    )
}

export default Header
