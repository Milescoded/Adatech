import React from "react";


function Attendees(){
    return(
        <>
        <div className='ContactUs'>
            <h4>Contact Us</h4>
            <p>For Partnership and Sponsorship enquiries, kindly reach out via mobile or email.</p>
            <p>Mobile: +234 803 000 0000</p>
            <p>Email:</p>
            <p>335 Rhapta Road, Nairobi, Kenya</p>
            <div>
                <form>
                    <section>
                        <label for='First name'>First name <input/></label>
                        <label for='Second name'>Last name <input/></label>
                        <label for='phone'>Phone number <input/></label>
                        <label for='Tickets'>Number of tickets <input/></label>

                    </section>
                    <section>
                        <label><input/>By clicking on “Attend Event” you agree to our Terms & Conditions and Privacy Statement.</label>
                    </section>
                    <section>
                        <button>Attend Event</button>
                    </section>

                </form>
            </div>
            <footer>© 2023 All Rights Reserved Future of Work Summit Africa 2023. Designed by Adanian Labs.</footer>


        </div>
        </>
    )
}


export default Attendees;