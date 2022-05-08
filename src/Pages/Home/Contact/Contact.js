import { Icon } from '@iconify/react';
import React from 'react';
import Location from '../../Location/Location';
import './Contact.css'

const Contact = () => {
    return (
        <div className='text-center container'>
            <h2 className='text-center'>Contact Us</h2>

            <div className='mt-5 contact-container'>
                <div>
                    <h5>Contact Number</h5>
                    <h6><Icon icon="ion-ios-call" /></h6>
                    <p className=''>01712345678</p>
                </div>
                <div>
                    <h5>Email</h5>
                    <h6><Icon icon="ion-ios-mail" /></h6>
                    <p className=''>ontirahid@yahoo.com</p>
                </div>
                <div>
                    <h5>Location</h5>
                    <h6><Icon icon="ion-ios-pin" /></h6>
                    <p className=''>76 Segunbagicha</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;