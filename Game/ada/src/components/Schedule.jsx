import React from "react";
import { Element } from "react-scroll";
import './Schedule.css';

function EventSchedule(){
    return(
        <Element name="Time" className="Event">
        <>
        <h3 className="Title">Event <span className="Title1">Schedule</span></h3>
        <div className="Days">
        <div className='Day1'>Day 1</div>
        <div className='Day2'>Day 2</div>
        <div className="line"></div>
        <div className='Day3'>Day 3</div>
        </div>
        </>
        </Element>
    )
}



export default EventSchedule;