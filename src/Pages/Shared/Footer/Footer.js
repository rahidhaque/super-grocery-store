import React from 'react';
import './Footer.css'
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-100 footer-position'>
            <footer className="footer-container footer-10 bg-dark">
                <div className="container">

                    <div className="row">
                        <div className="col-md-7">
                            <div className="row text-center">
                                <div className="col-md-4 mb-md-0 mb-4">
                                    <h2 className="footer-heading">About</h2>
                                    <ul className="list-unstyled">
                                        <li><NavLink style={({ isActive }) =>
                                            (isActive ? { color: 'white' } : { color: 'white' })} to="/" className="d-block">Out story</NavLink></li>
                                        <li><NavLink style={({ isActive }) =>
                                            (isActive ? { color: 'white' } : { color: 'white' })} to="/" className="d-block">Awards</NavLink></li>
                                        <li><NavLink style={({ isActive }) =>
                                            (isActive ? { color: 'white' } : { color: 'white' })} to="/" className="d-block">Our Team</NavLink></li>
                                        <li><NavLink style={({ isActive }) =>
                                            (isActive ? { color: 'white' } : { color: 'white' })} to="/" className="d-block">Career</NavLink></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 mb-md-0 mb-4">
                                    <h2 className="footer-heading">Company</h2>
                                    <ul className="list-unstyled">
                                        <li><NavLink style={({ isActive }) =>
                                            (isActive ? { color: 'white' } : { color: 'white' })} to="/" className="d-block">Our services</NavLink></li>
                                        <li><NavLink style={({ isActive }) =>
                                            (isActive ? { color: 'white' } : { color: 'white' })} to="/" className="d-block">Clients</NavLink></li>
                                        <li><NavLink style={({ isActive }) =>
                                            (isActive ? { color: 'white' } : { color: 'white' })} to="/" className="d-block">Contact</NavLink></li>
                                        <li><NavLink style={({ isActive }) =>
                                            (isActive ? { color: 'white' } : { color: 'white' })} to="/" className="d-block">Press</NavLink></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 mb-md-0 mb-4">
                                    <h2 className="footer-heading">Resources</h2>
                                    <ul className="list-unstyled">
                                        <li><NavLink style={({ isActive }) =>
                                            (isActive ? { color: 'white' } : { color: 'white' })} to="/blogs" className="d-block">Blog</NavLink></li>
                                        <li><NavLink style={({ isActive }) =>
                                            (isActive ? { color: 'white' } : { color: 'white' })} to="/" className="d-block">Newsletter</NavLink></li>
                                        <li><NavLink style={({ isActive }) =>
                                            (isActive ? { color: 'white' } : { color: 'white' })} to="/" className="d-block">Privacy Policy</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mb-md-0 mb-4 mx-auto text-center">
                            <h2 className="footer-heading text-center text-white mt-2">Subscribe</h2>
                            <form action="#" className="subscribe-form">
                                <div className="form-group d-block">
                                    <input type="text" className="form-control rounded-left mb-2" placeholder="Enter email address" />

                                    <button type="submit" className="form-control  submit bg-dark text-white mx-auto rounded-right w-50">Subscribe</button>

                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-5 pt-4 border-top text-white">
                        <div className="col-md-6 col-lg-8 mb-md-0 mb-4">
                            <p className="copyright mb-0 text-center">
                                Copyright &copy; {new Date().getFullYear()} All rights reserved. | Super Grocery Store
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-4 text-md-right text-center mb-2">

                            <a className='mx-2 text-white' href="https://twitter.com/home?lang=en" data-toggle="tooltip" data-placement="top" title="Twitter">
                                <span><Icon icon="ion-logo-twitter" /></span>
                            </a>
                            <a className='mx-2 text-white' href="https://www.facebook.com/" data-toggle="tooltip" data-placement="top" title="Facebook">
                                <span><Icon icon="ion-logo-facebook" /></span>
                            </a>
                            <a className='mx-2 text-white' href="https://www.instagram.com/?hl=en" data-toggle="tooltip" data-placement="top" title="Instagram">
                                <span><Icon icon="ion-logo-instagram" /></span>
                            </a>

                        </div>
                    </div>
                </div>
            </footer>
        </div >
    );
};

export default Footer;