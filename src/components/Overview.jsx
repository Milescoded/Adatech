import React from "react";
//import { Element } from "react-scroll";
import "./Home.css";
import Image from "../images/doll.png";
import hands from "../images/hands.png";
import girl from "../images/girl.png"
import laptop from "../images/laptop.png";

function OverView() {
    return(
        <div className="OverPage">
            <>
                <div className="Overcs">
                    <div className="OvercsTxt">
                        <h4 className="Overh4">Overview</h4>
                        <h3 className="Overh3">
                        Unlocking Africa's Potential: Redefining Work in a Rapidly Changing World
                        </h3>
                        <p className="Overp">
                        With a focus on unlocking Africa's potential, the summit delved into topics such as digital transformation, automation, remote work, and skills development. Attendees will gain insights on the latest trends and innovations shaping the future of work in Africa, and explored strategies for harnessing these changes to drive economic growth, enhance productivity, and create more inclusive and equitable work environments. Through engaging panel discussions, interactive workshops, and networking opportunities, the summit will provide a platform for stakeholders to collaborate, learn, and shape the future of work in Africa
                        </p>
                    </div>
                    <div className="OvercsPics">
                        <div className="OvercsPics1">
                            <div className="Overpicture1">
                            <img src={Image} alt='doll'/>
                            </div>
                            <div className="Overpicture2">
                                <img src={hands} alt='fingers'/>
                            </div>
                        </div>
                        <div className="OvercsPics2">
                            <div className="Overpicture3">
                                <img src={girl} alt='girlz'/>
                            </div>
                            <div className="Overpicture4">
                                <img src={laptop}  alt='A girl reading a laptop'/>
                            </div>
                    </div>
                </div>
                
                
                </div>
            

            </>
        </div>
    )
}

export default OverView;