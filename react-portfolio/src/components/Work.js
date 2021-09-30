import React from "react";
import Starwars from "../images/Starwars.png"
import Budget from "../images/Budget.png"
import TicketTask from "../images/TicketTask.png"
import Weather from "../images/weather-app.png"
// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css"


const Work = () => {

    // Star Wars
    const openPopupboxStarwars = () => {

        const content = (
            <>
            <img className= "work-image-popupbox" src = { Starwars } alt="Star Wars Quiz Project..." />
            <p>This was my first group project. In our group Star Wars is the most profound, epic, cinematic movie series of our time. This fact is exactly what inspired our team to create this project. It is a character quiz! The way we achieved this is providing an introductory statement and you are allowed to select an opion between Strongly Agree, Disgree, and Neutral.</p>
            <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://wflores230.github.io/Star-Wars-Quiz/")}>https://wflores230.github.io/Star-Wars-Quiz/</a>
            <br></br>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Wflores230/Star-Wars-Quiz")}>https://github.com/Wflores230/Star-Wars-Quiz</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigStarwars = {
        titleBar: {
            enable: true,
            text: "Star Wars Quiz"
        },
        fadeIn: true,
        fadeSpeed: 500
    }


    // Budget Tracker
    const openPopupboxBudgetTracker = () => {

        const content = (
            <>
            <img className= "work-image-popupbox" src = { Budget } alt="Budget Track Project..." />
            <p>This is a Budget Tracker application to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online. This app should give users a fast and easy way to track their money.</p>
            <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://sleepy-thicket-46451.herokuapp.com/")}>https://sleepy-thicket-46451.herokuapp.com/</a>
            <br></br>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Wflores230/Budget-Tracker.git")}>https://github.com/Wflores230/Budget-Tracker.git</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigBudgetTracker = {
        titleBar: {
            enable: true,
            text: "Budget Tracker"
        },
        fadeIn: true,
        fadeSpeed: 500
    }

    // TicketTask
    const openPopupboxTicketTask = () => {

        const content = (
            <>
            <img className= "work-image-popupbox" src = { TicketTask } alt="Ticket Task Project..." />
            <p>This CMS Event Registration app illustrates how developers can use modern frontend and backend technologies like node js, mysql, handlebars, and much more to build a functional web application. This app not only allows a user to search and get tickets for an event, but also create their own event for people to attend. Users can manage events, create event sign ups, create, and sign into an account.</p>
            <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://sleepy-thicket-46451.herokuapp.com/")}>https://sleepy-thicket-46451.herokuapp.com/</a>
            <br></br>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Wflores230/Budget-Tracker.git")}>https://github.com/Wflores230/Budget-Tracker.git</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigTicketTask = {
        titleBar: {
            enable: true,
            text: "Ticket Task"
        },
        fadeIn: true,
        fadeSpeed: 500
    }

    // Weather App
    const openPopupboxWeatherApp = () => {

        const content = (
            <>
            <img className= "work-image-popupbox" src = { Weather } alt="Weather App..." />
            <p>This file contains everything you need to see a fully functional weather app using the Open Weather API. You will be able to search for any city name and once you hit search it will give you the current weather and a 5 day forcast. You will be displayed a try again alert if the city you typed in isn't an actually city.</p>
            <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://sleepy-thicket-46451.herokuapp.com/")}>https://sleepy-thicket-46451.herokuapp.com/</a>
            <br></br>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Wflores230/Budget-Tracker.git")}>https://github.com/Wflores230/Budget-Tracker.git</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigWeatherApp = {
        titleBar: {
            enable: true,
            text: "Weather App"
        },
        fadeIn: true,
        fadeSpeed: 500
    }


    return (
     <div id="work" className="work-wrapper">
         <div className="container">
             <h1 className="text-uppercase text-center py-5">Previous Work</h1>
             <div className="image-box-wrapper d-flex flex-wrap align-items-center justify-content-center">
                <div className="work-image-box" onClick={openPopupboxStarwars}>
                    <img className="work-image" src={ Starwars } alt="Star Wars Quiz Project..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="work-icon" icon={faSearchPlus} />
                </div>   
             
             
                <div className="work-image-box" onClick={openPopupboxBudgetTracker}>
                    <img className="work-image" src={ Budget } alt="Budget Tracker Project..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="work-icon" icon={faSearchPlus} />
                </div>
             
             
                <div className="work-image-box" onClick={openPopupboxTicketTask}>
                    <img className="work-image" src={ TicketTask } alt="Ticket Task Project..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="work-icon" icon={faSearchPlus} />
                </div>
             
             
                <div className="work-image-box" onClick={openPopupboxWeatherApp}>
                    <img className="work-image" src={ Weather } alt="Weather App Project..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="work-icon" icon={faSearchPlus} />
                </div>
            </div>
         </div>
         <PopupboxContainer {... popupboxConfigStarwars} />
         <PopupboxContainer {... popupboxConfigBudgetTracker} />
         <PopupboxContainer {... popupboxConfigTicketTask} />
         <popupboxConfigWeatherApp {... popupboxConfigWeatherApp} />
     </div>
    )
}

export default Work