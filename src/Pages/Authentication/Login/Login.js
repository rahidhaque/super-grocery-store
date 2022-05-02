import { } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import login from '../../../images/Authentication/Login.png';
import { Icon } from '@iconify/react';
import './Login.css'

const Login = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <div>
                    <img className='w-75' src={login} alt="" />
                </div>
                <div className='w-50 form-login'>
                    <Form>
                        <h3 className='text-center'><Icon icon="bxs:user" /></h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button className='w-100' variant="danger" type="submit">
                            Login <span> <Icon icon="entypo:login" /></span>
                        </Button>
                        <p className='mt-2 text-center'>
                            Not Registered? <Link className='text-decoration-none text-danger' to="/registration">Create an Account</Link>
                        </p>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;