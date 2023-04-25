import React from "react";
import EventSchedule from "./components/Schedule";
import EventSpeakers from "./components/Speakers";
import IndustrySponsors from "./components/Sponsors";
import KeyTakeAways from "./components/Keytakeaways";
import OverView from "./components/Overview";
import { Link } from "react-router-dom";
import './style.css';



function Home(){
    return(
        <>
        <div className="landingbar container">
        <nav>
      <ul>
            <li>
            <Link to="/Home" className="Nav1">LogoHome</Link>
            </li>
            <li>  <Link to="/Overview" className="Nav2">Overview</Link>
            </li>
            <li>
            <Link to="/Keytakeaways" className="Nav3">Key Takeaways</Link>
            </li>
            <li>
            <Link to="/Speakers" className="Nav4">Speakers</Link>
            </li>
            <li>
            <Link to="/Schedule" className="Nav5">Schedule</Link>
            </li>
            <li>
            <Link to="/Sponsors" className="Nav6">Sponsors</Link>
            </li>
            <li>
            <Link to="/Attend" className="Nav7">Attend</Link>
            </li>
      </ul>
    </nav>
        </div>
        <div className="Landmain container">
            <h3 className="Land1">Future of Work Summit Africa 2023 </h3>
            <h3 className="Land2">
                The Future of Work Summit Africa 2023 will bring together industry leaders,
                policymakers, and experts to discuss the rapidly
                changing world of work and its impact on Africa.<br></br>
                June 5 - 8, 2023 - Sarit Centre, Nairobi, Kenya + Virtual
            </h3>
            <button className="Bt1"><span className="inBt1">Attend</span></button><button className="Bt2"><span className="inBt2">Become a Sponsor</span></button>
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
        </div>

        <div className="container">
            
            <OverView/>
            <KeyTakeAways/>
            <IndustrySponsors/>
            <EventSpeakers/>
            <EventSchedule/>
        </div>
        </>

    );
};

export default Home;
