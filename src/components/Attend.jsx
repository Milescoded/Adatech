
import './Attend.css';
import React, { useEffect } from "react";



function Attendees(){
    useEffect(() => {
        const ticketDropdown = document.getElementById("tickets");
        for (let i = 1; i <= 10; i++) {
          const option = document.createElement("option");
          option.value = i;
          option.text = i;
          ticketDropdown.add(option);
        }
      }, []);

    return(
        
        <div className='ContactUs'>
            <div className='contacts'>
                <h4>Contact Us</h4> 
                <p>For Partnership and Sponsorship enquiries,<br></br> kindly reach out via mobile or email.</p>
                <p className='contact-info'>Mobile: +234 803 000 0000</p>
                <p className='contact-info'>Email:info@fws.io</p>
                <p className='contact-info'>335 Rhapta Road, Nairobi, Kenya</p>
            </div>
            
           
            <div className="contacts2">
                <form>
                    <section>
                        <label for='First name' style={{display: 'inline-block'}}>First name<br></br>  <input placeholder='John' /> </label>
                        <label for='Second name'  style={{display: 'inline-block'}}>Last name<br></br><input placeholder='Kamara' /> </label>
                        <label>Email Address<br></br><input placeholder="johnkamara@gmail.com"/></label>
                        <label for='phone'>Phone number<br></br><input placeholder="+254 701 611 450"/></label>
                         <label for="tickets">
                            Number of Tickets<br></br>
                            <select id="tickets" name="tickets"></select>
                        </label>

                    </section>
                    <section>
                        <label> <input type="checkbox"/>By clicking on “Attend Event” you agree to our Terms & Conditions and Privacy Statement.</label>
                    </section>
                    <section>
                        <label><button  className="attend-btn">Attend Event</button></label>
                    </section>

                </form>
            </div>


            <div className="foot">
            <footer className="text">© 2023 All Rights Reserved Future of Work Summit Africa 2023. Designed by Adanian Labs.</footer>
            </div>
            


        </div>
        
    )
}


export default Attendees;