import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    
    function handleExportWithComponent() {
        window.location = "https://docs.google.com/document/d/1OKkiukWKr1R4lrrU5kFLtRgt9KmxLBONEmhi78c2bwI/edit?usp=sharing";
      }

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>City Of Middletown</p>
                        </div>
                        <div className="d-flex">
                            <p>floreswilliam891@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br></br>
                                <a className="footer-nav">About Me</a>
                                <br></br>
                                <a className="footer-nav">Services</a>
                                <br></br>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Previous Work</a>
                                <br></br>
                                <a className="footer-nav">Contact</a>
                                <br></br>
                                <button primary={true} onClick={handleExportWithComponent} className="footer-nav">Resume</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">

                            <a 
                                href="https://www.facebook.com/will.flores.3517"
                                className="social"
                                >
                                <FontAwesomeIcon icon={faFacebook} size="3x"></FontAwesomeIcon> 
                            </a>
                            <a 
                                href="https://github.com/Wflores230"
                                className="social"
                                >
                                <FontAwesomeIcon icon={faGithub} size="3x"></FontAwesomeIcon> 
                            </a>
                            <a 
                                href="https://www.youtube.com/channel/UCYY6CJy3GlUz9KqiMmNGucg"
                                className="social"
                                >
                                <FontAwesomeIcon icon={faYoutube} size="3x"></FontAwesomeIcon> 
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/william-e-flores/"
                                className="social"
                                >
                                <FontAwesomeIcon icon={faLinkedin} size="3x"></FontAwesomeIcon> 
                            </a>
                            
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp; Will's Portfolio | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
