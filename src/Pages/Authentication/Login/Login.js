import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import login from '../../../images/Authentication.jpg';

const Login = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <div>
                    <img className='w-50' src={login} alt="" />
                </div>
                <div className='w-100'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className='w-100' variant="danger" type="submit">
                            Submit
                        </Button>
                        <p className='mt-2 text-center'>
                            Not Registered? <Link className='text-decoration-none' to="/registration">Create an Account</Link>
                        </p>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;