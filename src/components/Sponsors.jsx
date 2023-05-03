import React from'react';
import './Sponsors.css'

function IndustrySponsors(){
    return(
        <>
        <div className='IndustrySponsors'>
            <div className='Industrytitle'>
                <h3 >Industry Sponsors</h3>
            </div>
           

            <div className='Sponsorslist'>
                <div className='nvidia'>
                    <img src='../images/nvidia.png' alt='nvidia'/>
                </div>
                <div className='Huawei'>
                    <img src='../images/Huawei.png' alt='Huawei'/>
                </div>
                <div className='Cardano'>
                    <img src='../images/Cardano.png' alt='Cardano'/>
                </div>
                <div className='Telkom'>
                    <img src='../images/Telkom.png' alt='Telkom'/>
                </div>
                <div className='fsd'>
                    <img src='../images/fsd.png' alt='fsd'/>
                </div>
            </div>
           

        </div>

        

        
        </>
    )
}


export default IndustrySponsors;