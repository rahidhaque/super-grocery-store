import { } from '@fortawesome/free-solid-svg-icons'
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../images/Authentication/Login.png';
import { Icon } from '@iconify/react';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const emailRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorText;
    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        await signInWithEmailAndPassword(email, pass);
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>;
    }

    if (error) {
        errorText = <p className='text-danger'>{error.message}</p>
    }
    return (
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center mt-5 login-container'>
                <div>
                    <img className='w-75' src={login} alt="" />
                </div>
                <div className='w-50 form-login'>
                    <Form onSubmit={handleLogin}>
                        <h3 className='text-center'><Icon icon="bxs:user" /></h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button className='w-100' variant="danger" type="submit">
                            Login <span> <Icon icon="entypo:login" /></span>
                        </Button>
                        <div className='mt-2 fw-bold'>
                            {errorText}
                        </div>
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