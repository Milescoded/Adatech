import React from "react";
import EventSchedule from "./components/Schedule";
import EventSpeakers from "./components/Speakers";
import IndustrySponsors from "./components/Sponsors";
import KeyTakeAways from "./components/Keytakeaways";
import OverView from "./components/Overview";
import { Link } from "react-router-dom";



function Home(){
    return(
        <>
        <div>
        <nav>
      <ul>
            <li>
            <Link to="/Home">LogoHome</Link>
            </li>
            <li>  <Link to="/Overview">Overview</Link>
            </li>
            <li>
            <Link to="/Keytakeaways">Key Takeaways</Link>
            </li>
            <li>
            <Link to="/Speakers">Speakers</Link>
            </li>
            <li>
            <Link to="/Schedule">Schedule</Link>
            </li>
            <li>
            <Link to="/Sponsors">Sponsors</Link>
            </li>
            <li>
            <Link to="/Attend">Attend</Link>
            </li>
      </ul>
    </nav>
        </div>

        <div>
            
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
