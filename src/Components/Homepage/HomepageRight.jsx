import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const HomepageRight = () => {
    const iconStyle = {
        height: '30px', 
        width: '30px', 
        borderRadius: '50%', 
        background: 'rgb(149 147 147 / 32%)', 
        marginRight: '8px',
        display: 'inline-flex', 
        justifyContent: 'center', 
        alignItems: 'center'
}
return (
    <>
        <div className='pb-4'>
            <h4>Login with</h4>
            <button className='btn btn-primary d-block w-100 mb-2'>Facebook</button>
            <button className='btn btn-danger d-block w-100'>Instagram</button>
        </div>
        <div className='my-5'>
            <h2>Find us on</h2>
            <ul className='list-unstyled'>
                <li className='p-4 border'> <span style={iconStyle}><FaFacebook></FaFacebook></span> Facebook</li>
                <li className='p-4 border'> <span style={iconStyle}><FaTwitter></FaTwitter></span> Twitter</li>
                <li className='p-4 border'> <span style={iconStyle}><FaInstagram></FaInstagram></span> Instagram</li>
                <li className='p-4 border'> <span style={iconStyle}><FaLinkedin></FaLinkedin></span> Linkedin</li>
            </ul>
        </div>
    </>
);
};

export default HomepageRight;