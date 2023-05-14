import React from'react';
import './Sponsors.css'
import nvidia from '../images/nvidia.png'
import Huawei from '../images/Huawei.png'
import Cardano from '../images/Cardano.png'
import Telkom from '../images/Telkom.png'
import fsd from '../images/fsd.png'

function IndustrySponsors(){
    return(
        <>
        <div className='IndustrySponsors'>

            <div className='Industrytitle'>
                <h3 >Industry <span>Sponsors</span></h3>
            </div>
           

            <div className='Sponsorslist'>
                <div className='nvidia'>
                    <img src={nvidia} alt='nvidia'/>
                </div>
                <div className='Huawei'>
                    <img src={Huawei} alt='Huawei'/>
                </div>
                <div className='Cardano'>
                    <img src={Cardano} alt='Cardano'/>
                </div>
                <div className='Telkom'>
                    <img src={Telkom} alt='Telkom'/>
                </div>
                <div className='fsd'>
                    <img src={fsd} alt='fsd'/>
                </div>
            </div>
           

        </div>

        

        
        </>
    )
}


export default IndustrySponsors;