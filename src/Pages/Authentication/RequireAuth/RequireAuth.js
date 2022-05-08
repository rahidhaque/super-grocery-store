import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }


    if (error) {
        toast(error?.message);
    }

    if (!user) {
        return <div className='d-flex justify-content-center align-items-center mt-5'>
            <h3 className='text-danger'>Please Login First!!</h3>
        </div>
    }


    if (!user.emailVerified) {
        return <div className='mt-5 text-center'>
            <h3 className='text-danger'>Email is not verified! Please Verify First!</h3>
            <button
                className='btn btn-danger'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send Verification Email Again
            </button>

            <ToastContainer></ToastContainer>
        </div>
    }



    return children;
};

export default RequireAuth;