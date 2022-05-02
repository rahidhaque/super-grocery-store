import { Icon } from '@iconify/react';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import registration from '../../../images/Authentication/Registration.png';

const Registration = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <div>
                    <img className='w-75 h-50' src={registration} alt="" />
                </div>
                <div className='w-25 form-login mr-5'>
                    <Form>
                        <h3 className='text-center'><Icon icon="carbon:user-role" /></h3>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button className='w-100' variant="danger" type="submit">
                            Register <span> <Icon icon="eos-icons:system-re-registered" /></span>
                        </Button>
                        <p className='mt-2 text-center'>
                            Already have an account? <Link className='text-decoration-none text-danger' to="/login">Login</Link>
                        </p>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Registration;