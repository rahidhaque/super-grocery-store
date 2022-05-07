import React from 'react';
import notFound from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div className='my-5'>
            <div className='text-center mt-5'>
                <img className='img-fluid' style={{ height: '600px', width: '900px' }} src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;