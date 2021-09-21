import React from "react"
import Grad from "../images/grad.jpg"


const About = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xs-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile" src={ Grad } alt="profile picture"></img>
                    </div>
                </div>
                <div className="col-lg-6 col-xs-12">
                    <h1 className="about-info">about me</h1>
                    <p>
                    Developer & Creative<br></br> 
                    <br></br>Hello, My name is William Flores. I am currently in training to become a web developer and I also recently graduated with a BA in Marketing. If you are looking someone who is efficent with developing and maintaing HTML/CSS templates, please feel free to contact me. I can also help with any marketing stratgey and creative ideas, as I have work on some marketing campagins in the past.
                    <br></br>I currently working on my own website for my busniess. I also competencies in Microsoft Office (Word, PowerPoint, Excel), Adobe Photoshop, proficient in Google Analytics, and Social Media Marketing and have excellent Bilingual oral and written skill in both English and Spanish. I have work at Nike, Jimmy Jazz, and now a Car Dealership known as Suresky's and Sons.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
