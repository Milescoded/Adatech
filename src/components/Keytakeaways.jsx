import React from "react";
import { Element } from "react-scroll";
import "./Home.css"

function KeyTakeAways() {
    return(
        <Element name="KeyTakeAways" className="KeyTakeAways">
        <div className="Keystyles">
            <h3 className="Keystylesheading">Key <span className="Keystylesheading1">Takeaways</span></h3>
            <div className="grid">
                <div className="StayAhead">
                    <div className="StayAhead-text">
                        <h4>Stay Ahead of the Curve</h4>
                        <p>The summit will offer attendees the opportunity to stay up-to-date with the latest trends and innovations shaping the future of work in Africa.</p>
                    </div>
                </div>
                <div className="Connect">
                    <div className="Connect-text">
                        <h4>Connect with Industry Leaders</h4>
                        <p>Attendees will have the opportunity to network with industry leaders, policymakers, and experts from a range of sectors.</p>
                    </div>
                </div>
                <div className="Learn">
                    <div className="Learn-text">
                        <h4>Learn from Thought Leaders</h4>
                        <p>Hear from thought leaders and experts in the field of work and technology as they share their perspectives and insights on the future of work in Africa.</p>
                    </div>
                </div>
                <div className="Opportunities">
                    <div className="Opportunities-text">
                        <h4>Explore New Opportunities</h4>
                        <p>Learn about the latest innovations and trends and explore ways to leverage these changes to advance your career or business.</p>
                    </div>
                </div>
                <div className="Skills">
                    <div className="Skills-text">
                        <h4>Expand your New Skills</h4>
                        <p>Attend workshops and training sessions to enhance your skills and knowledge in areas such as digital transformation, remote work, and skills development.</p>
                    </div>
                </div>
                <div className="Africa">
                    <div className="Africa-text">
                        <h4>Contribute to the Future of Work in Africa</h4>
                        <p>Explore strategies for driving economic growth, enhancing productivity, and creating equitable work environments that benefit all Africans.</p>
                    </div>
                </div>
            </div>
        </div>
    </Element>
    )
};


export default  KeyTakeAways;