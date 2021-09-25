import React from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faFileCode, faChartLine, faLightbulb } from '@fortawesome/free-solid-svg-icons'


const Services = () => {
    return (
        <div id="services" className ="service">
            <h1 className="service-header py-5">my services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon ={faDesktop} size="2x"></FontAwesomeIcon> </div>
                                <h3>Web Design</h3>
                                <p>I approch each project individually and always focus on the result</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon ={faFileCode} size="2x"></FontAwesomeIcon> </div>
                                <h3>Web Development</h3>
                                <p>Your website will be build with an new proven technologies.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon ={faChartLine} size="2x"></FontAwesomeIcon> </div>
                                <h3>Soical Media Marketing</h3>
                                <p> Will use digital and traditional strategies to best market your company</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon ={faLightbulb} size="2x"></FontAwesomeIcon> </div>
                                <h3>Advertisments</h3>
                                <p>Planning out and creating advertisments based on your needs</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Services
