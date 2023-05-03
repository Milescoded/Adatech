import React from "react";
import './Speakers.css'
import john from "../images/John.png"
import john1 from "../images/John1.png"
import john4 from "../images/John4.png"
import john5 from "../images/John5.png"
import john6 from "../images/John6.png"



function EventSpeakers(){
    return(
        
        <>
        <h4 className="Heading">Event Speakers</h4>
        <div className="parent">
            <div className="John">
                <div> <img  src={john} alt='Kamaras'/></div>
                <p>John Kamara</p>
                <p>Co-founder of Adanian labs & Afya Rekods</p>
            </div>

            <div className="John">
                <div><img  src={john1} alt='Kamaras'/></div>
                <p>John Kamara</p>
                <p>Co-founder of Adanian labs & Afya Rekods</p>
            </div>

            <div className="John">
                <div><img  src={john4} alt='Kamaras'/></div>
                <p>John Kamara</p>
                <p>Co-founder of Adanian labs & Afya Rekods</p>
            </div>

            <div className="John">
                <div><img  src={john5} alt='Kamaras'/></div>
                <p>John Kamara</p>
                <p>Co-founder of Adanian labs & Afya Rekods</p>
            </div>

            <div className="John">
                <div><img  src={john6} alt='Kamaras'/></div>
                <p>John Kamara</p>
                <p>Co-founder of Adanian labs & Afya Rekods</p>
            </div>

            <div className="John">
                <div><img  src={john} alt='Kamaras'/></div>
                <p>John Kamara</p>
                <p>Co-founder of Adanian labs & Afya Rekods</p>
            </div>
            
            
        </div>
        


        </>
       
        
    )
}


export default EventSpeakers;