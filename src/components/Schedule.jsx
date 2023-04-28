import React from "react";
import { Element } from "react-scroll";
import './Schedule.css';

function EventSchedule(){
    return(
        <Element name="Time" className="Event">
            <div className="Parenrforschedule">
                <h3 className="Title">Event <span className="Title1">Schedule</span></h3>
                <div className="parent1">
                    <div className='Day1'>Day 1</div>
                    <div className='Day2'>Day 2</div>
                    <div className='Day3'>Day 3</div>
                </div>
            </div>
       
            
    
        </Element>
    )
}



export default EventSchedule;