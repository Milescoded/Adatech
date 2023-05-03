import React from "react";
import { Element } from "react-scroll";
import './Schedule.css';

function EventSchedule(){
    return(
        <Element name="Time" className="Event">
            <div className="Parentforschedule">
                <h3 className="Title">Event <span className="Title1">Schedule</span></h3>

            

                <div className="parent1">
                    <div>
                        Day 1
                        <p>June 5, 2023</p>
                    </div>
                    <div>
                        Day 2
                        <p>June 5, 2023</p>
                    </div>
                    <div className="separator"></div>
                    <div>
                        Day 3
                        <p>June 5, 2023</p>
                    </div>
                </div>


                <div className="parent2">
                    <div><p>08:00 - 10:00 AM</p></div>
                    <div>
                        <p>John Kamara</p>
                        <p>Co-Founder of Adanian Labs & Afya Rekod</p>
                    </div>
                    <div>
                        <p>
                            Introdution Wordpress
                        </p>
                        <p>
                            In this session we will discuss about digital topics in detail. 
                            You need laptops and other tech support equipment. 
                            This session will last for 2 hours. So prepare yourself.
                        </p>
                    </div>
                    <div>
                        <p>
                            Introdution Wordpress
                        </p>
                        <p>
                            In this session we will discuss about digital topics in detail. 
                            You need laptops and other tech support equipment. 
                            This session will last for 2 hours. So prepare yourself.
                        </p>
                    </div>
                    <div>
                        <p>
                            Introdution Wordpress
                        </p>
                        <p>
                            In this session we will discuss about digital topics in detail. 
                            You need laptops and other tech support equipment. 
                            This session will last for 2 hours. So prepare yourself.
                        </p>
                    </div>
                    
                    
                </div>
            </div>
            
       
            
    
        </Element>
    )
}



export default EventSchedule;