import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSeedling, faTimes } from '@fortawesome/free-solid-svg-icons'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <nav className='nav-items'>
                <h3 className='nav-logo'>Super Grocery Factory  <i><FontAwesomeIcon className='fa-logo' icon={faSeedling} /></i></h3>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FontAwesomeIcon className='fa-logo' icon={faTimes} /> : <FontAwesomeIcon className='fa-logo' icon={faBars} />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to="/home">Home</Link></li>
                    {
                        user ?
                            <li><Link disabl to="/manageitems">Manage Items</Link></li> :
                            <li><Link style={{ display: 'none' }} to="/manageitems">Manage Items</Link></li>
                    }
                    {
                        user ?
                            <li><Link to="/additems">Add Items</Link></li> :
                            <li><Link style={{ display: 'none' }} to="/additems">Add Items</Link></li>
                    }
                    {
                        user ?
                            <li><Link to="/myitems">My Items</Link></li> :
                            <li><Link style={{ display: 'none' }} to="/myitems">My Items</Link></li>
                    }
                    {
                        user ?
                            <li><button onClick={handleSignOut} className='btn btn-link text-light text-decoration-none'>Sign Out</button></li>
                            : <li><Link to="/login">Login</Link></li>

                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;