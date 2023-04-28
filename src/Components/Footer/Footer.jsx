import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
                <footer>
                    <div className='d-flex py-5 container'>
                        <div className='flex-grow-1 text-white d-flex justify-content-center align-items-center flex-column'>
                            <h5>The news dragon.</h5>
                            <p>Providing reliable tech since 1992</p>
                        </div>
                        <div className='flex-grow-1'>
                            <span className="footer-header">Services</span>
                            <ul className='list-unstyled'>
                                <li><a href='#'>Branding</a></li>
                                <li><a href='#'>Design</a></li>
                                <li><a href='#'>Marketing</a></li>
                                <li><a href='#'>Advertisement</a></li>
                            </ul>
                        </div>
                        <div className='flex-grow-1'>
                            <span className="footer-header">Company</span>
                            <ul className='list-unstyled'>
                                <li><a href='#'>About us</a></li>
                                <li><a href='#'>Contact</a></li>
                                <li><a href='#'>Jobs</a></li>
                                <li><a href='#'>Press kit</a></li>
                            </ul>
                        </div>
                        <div className='flex-grow-1'>
                            <span className="footer-header">Legal</span>
                            <ul className='list-unstyled'>
                                <li><a href='#'>Terms of use</a></li>
                                <li><a href='#'>Privacy policy</a></li>
                                <li><a href='#'>Cookie policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-center fw-bold py-4 border-top border-dark text-white'>
                        <h4 className='m-0'>Copyright © 2023 - All right reserved</h4>
                    </div>
                </footer>

    );
};
export default Footer
