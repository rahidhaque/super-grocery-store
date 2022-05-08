import { Icon } from '@iconify/react';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import registration from '../../../images/Authentication/Registration.png';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import './Registration.css'
import SocialLogin from '../SocialLogin/SocialLogin';

const Registration = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    let errorText;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegistration = async event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        await createUserWithEmailAndPassword(email, pass);
        await updateProfile({ displayName: name });
    }

    if (user) {
        navigate('/home');
    }

    if (loading || updating) {
        return <Loading></Loading>;
    }

    if (error || updateError) {
        errorText = <p className='text-danger'>Error: {error?.message}</p>
    }
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center mt-5 register-container'>
                <div>
                    <img className='w-75' src={registration} alt="" />
                </div>
                <div className='w-25 form-register mr-5'>
                    <Form onSubmit={handleRegistration} autoComplete="off">
                        <h3 className='text-center'><Icon icon="carbon:user-role" /></h3>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" autoComplete='off' required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passRef} type="password" placeholder="Password" autoComplete='off' required />
                        </Form.Group>
                        <Button className='w-100' variant="danger" type="submit">
                            Register <span> <Icon icon="eos-icons:system-re-registered" /></span>
                        </Button>
                        <div className='mt-2 fw-bold'>
                            {errorText}
                        </div>

                    </Form>
                    <p className='mt-2 text-center'>
                        Already have an account? <Link className='text-decoration-none text-danger' to="/login">Login</Link>
                    </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div >
    );
};

export default Registration;