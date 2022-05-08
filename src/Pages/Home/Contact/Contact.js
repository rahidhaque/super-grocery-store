import { Icon } from '@iconify/react';
import React from 'react';

const Contact = () => {
    return (
        <div className='text-center'>
            <h2 className='text-center'>Contact Us</h2>

            <div className='mt-5 d-flex justify-content-evenly align-items-center'>
                <div>
                    <h5>Contact Number</h5>
                    <h6><Icon icon="ion-ios-call" /></h6>
                    <p>01712345678</p>
                </div>
                <div>
                    <h5>Email</h5>
                    <h6><Icon icon="ion-ios-mail" /></h6>
                    <p>ontirahid@yahoo.com</p>
                </div>
                <div>
                    <h5>Location</h5>
                    <h6><Icon icon="ion-ios-pin" /></h6>
                    <p>76 Segunbagicha</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;