import React from "react";
import EventSchedule from "./components/Schedule";
import EventSpeakers from "./components/Speakers";
import IndustrySponsors from "./components/Sponsors";
import KeyTakeAways from "./components/Keytakeaways";
import OverView from "./components/Overview";
import Attendees from "./components/Attend";
import { Link } from "react-scroll";
import './style.css';
import group from "../src/images/Group.png";


function Home(){
    return(
        <div className="all">
            <div className="landingbar">
            <div className="logo"><Link to="/Home" className="Nav1"><img src={group} alt='groupz'/></Link></div>
                <ul>
                        <li><Link to="/Overview" className="Nav2">Overview</Link>
                        </li>
                        <li>
                        <Link to="/Keytakeaways" className="Nav3">Key Takeaways</Link>
                        </li>
                        <li>
                        <Link to="/Speakers" className="Nav4">Speakers</Link>
                        </li>
                        <li>
                        <Link to="Time" className="Nav5" smooth={true} duration={1000}>Schedule</Link>
                        </li>
                        <li>
                        <Link to="/Sponsors" className="Nav6">Sponsors</Link>
                        </li>
                        <li>
                        <Link to="/Attend" className="Nav7">Attend</Link>
                        </li>
                </ul>
            </div>
            <div className="Landmain">
                <h3 className="Land1">Future of Work Summit Africa 2023 </h3>
                <h3 className="Land2">
                    The Future of Work Summit Africa 2023 will bring together industry leaders,
                    policymakers, and experts to discuss the rapidly
                    changing world of work and its impact on Africa.<br></br>
                    June 5 - 8, 2023 - Sarit Centre, Nairobi, Kenya + Virtual
                </h3>
                <span className="Landbtns">
                    <button className="Bt1">Attend</button>
                    <button className="Bt2">Become a Sponsor</button>
                </span>
            </div>
            <div className="FooterLand">
                    <div className="ForVenue">
                        <h4 className="Inforvenue">Venue</h4>
                        <p className="Inforvenuep1">Sarit Centre, Nairobi, Kenya</p>
                    </div>
                    <div className="ForVenue1">
                        <h4 className="Inforvenue">Date</h4>
                        <p className-="Inforvenuep1">June 5 - 8, 2023</p>
                    </div>
                    <div className="ForVenue2">
                        <h4 className="Inforvenue">Ticket</h4>
                        <p className="Inforvenuep1" >Free - RSVP</p>
                    </div>
                </div>

            <div>
                
                <OverView/>
                <KeyTakeAways/>
                <EventSpeakers/>
                <EventSchedule/>
                <IndustrySponsors/>
                <Attendees/>
            </div>
        </div>

    );
};

export default Home;
