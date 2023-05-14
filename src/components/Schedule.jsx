import React from "react";
import { Element } from "react-scroll";
import './Schedule.css';
import johncircle from '../images/johncircle.png';

function EventSchedule(){
    return(
        <Element name="Time" className="Event">
            <div className="Parentforschedule">
                <h3 className="Title">Event <span>Schedule</span></h3>

            

                <div className="parent1">
                    <div>
                        <h7>Day 1</h7>
                        <br></br>
                        <p>June 5, 2023</p>
                    </div>
                    <div>
                        <h7>Day 2</h7>
                        <br></br>
                        <p>June 6, 2023</p>
                    </div>
                    <div className="separator"></div>
                    <div>
                        <h7>Day 3</h7>
                        <br></br>
                        <p>June 7, 2023</p>
                    </div>
                </div>


                <div className="parent2">
                        <div>
                            <p>08:00 - 10:00 AM</p>
                        </div>
                        <div>
                            <img src={johncircle} alt="cirle"/>
                        </div>
                        <div>
                            <p>John Kamara</p>
                            <p>Co-Founder of Adanian Labs & Afya Rekod</p>
                        </div>
                        <div class="topic-discussion">
                            <div>
                            <p>Introdution Wordpress</p>
                            <p>In this session we will discuss about digital topics in detail. You need laptops and<br></br> other tech support equipment. This session will last for 2 hours. So prepare yourself.</p>
                            </div>
                        </div>
                </div>
                <div className="line"></div>
                <div className="parent2">
                        <div>
                            <p>08:00 - 10:00 AM</p>
                        </div>
                        <div>
                            <img src={johncircle} alt="circle"/>
                        </div>
                        <div>
                            <p>John Kamara</p>
                            <p>Co-Founder of Adanian Labs & Afya Rekod</p>
                        </div>
                        <div class="topic-discussion">
                            <div>
                            <p>Introdution Wordpress</p>
                            <p>In this session we will discuss about digital topics in detail. You need laptops and<br></br> other tech support equipment. This session will last for 2 hours. So prepare yourself.</p>
                            </div>
                        </div>
                </div>
                <div className="line"></div>
                <div className="parent2">
                        <div>
                            <p>08:00 - 10:00 AM</p>
                        </div>
                        <div>
                            <img src={johncircle} alt="circle"/>
                        </div>
                        <div>
                            <p>John Kamara</p>
                            <p>Co-Founder of Adanian Labs & Afya Rekod</p>
                        </div>
                        <div class="topic-discussion">
                            <div>
                            <p>Introdution Wordpress</p>
                            <p>In this session we will discuss about digital topics in detail. You need laptops and<br></br> other tech support equipment. This session will last for 2 hours. So prepare yourself.</p>
                            </div>
                        </div>
                </div>
                <div className="line"></div>
                <div className="parent2 ">
                        <div className="parent2-first">
                            <p>08:00 - 10:00 AM</p>
                        </div>
                        <div>
                            <img src={johncircle} alt="circle"/>
                        </div>
                        <div>
                            <p>John Kamara</p>
                            <p>Co-Founder of Adanian Labs & Afya Rekod</p>
                        </div>
                        <div class="topic-discussion">
                            <div>
                            <p>Introdution Wordpress</p>
                            <p>In this session we will discuss about digital topics in detail. You need laptops and<br></br> other tech support equipment. This session will last for 2 hours. So prepare yourself.</p>
                            </div>
                        </div>
                </div>
                <div className="line"></div>

            </div>
            
       
            
    
        </Element>
    )
}



export default EventSchedule;