import React from "react";
import { Element } from "react-scroll";
import "./Home.css";

function OverView() {
    return(
        <Element name="OverPage">
        <>
        <div className="Overcs">
        <h4 className="Overh4">Overvview</h4>
        <h3 className="Overh3">
        Unlocking Africa's Potential: Redefining Work in a Rapidly Changing World
        </h3>
        <p className="Overp">
        With a focus on unlocking Africa's potential, the summit delved into topics such as digital transformation, automation, remote work, and skills development. Attendees will gain insights on the latest trends and innovations shaping the future of work in Africa, and explored strategies for harnessing these changes to drive economic growth, enhance productivity, and create more inclusive and equitable work environments. Through engaging panel discussions, interactive workshops, and networking opportunities, the summit will provide a platform for stakeholders to collaborate, learn, and shape the future of work in Africa
        </p>
        <div className="Overpicture"></div>
        <div className="Overpicture1"></div>
        <div className="Overpicture2"></div>
        <div className="Overpicture3"></div>
        </div>
        

        </>
        </Element>
    )
}

export default OverView;