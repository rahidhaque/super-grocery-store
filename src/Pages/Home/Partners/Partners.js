import React from 'react';
import goldenHarvest from '../../../images/partners/golden_harvest.jpg'
import radhuni from '../../../images/partners/Radhuni.jpg'
import danish from '../../../images/partners/danish.png'
import igloo from '../../../images/partners/igloo.jpg'

import './Partners.css'

const Partners = () => {
    return (
        <div className='mt-2 container'>
            <h2 className='text-center'>Our Trusted Suppliers</h2>
            <div className='supply-img-container'>
                <div>
                    <img src={goldenHarvest} alt="" />
                </div>
                <div>
                    <img src={radhuni} alt="" />
                </div>
                <div>
                    <img src={danish} alt="" />
                </div>
                <div>
                    <img src={igloo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Partners;