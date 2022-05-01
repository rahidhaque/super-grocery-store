import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSeedling, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';





const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
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
                    <li><Link to="/manageitems">Manage Items</Link></li>
                    <li><Link to="/additems">Add Items</Link></li>
                    <li><Link to="/myitems">My Items</Link></li>
                    <li><Button className='btn-login' variant='danger'>Login</Button></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;