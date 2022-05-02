import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center w-100' style={{ height: '250px' }}>
            <Spinner animation="border" variant="danger" />
        </div>
    );
};

export default Loading;