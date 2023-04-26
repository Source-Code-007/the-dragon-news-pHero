import React, { useContext } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { authContext } from '../../AuthContext/AuthContext';

const HomepageRight = () => {
    const { signinWithGoogleFunc, signinWithGithubFunc } = useContext(authContext)

    // style for social media icon
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

    // handle GOOGLE signin function
    const handleGoogleSigninFunc = () => {
        signinWithGoogleFunc()
            .then(res => {
                const user = res.user
                console.log(user);
            })
            .catch(e => {
                console.log(e.message);
            })
    }

    // handle GITHUB signin function
    const handleGithubSigninFunc = () => {
        signinWithGithubFunc()
            .then(res => {
                const user = res.user
                console.log(user);
            })
            .catch(e => {
                console.log(e.message);
            })
    }

    return (
        <>
            <div className='pb-4'>
                <h4>Login with</h4>
                <button onClick={handleGoogleSigninFunc} className='btn btn-success d-block w-100 mb-2'>Google</button>
                <button onClick={handleGithubSigninFunc} className='btn btn-info d-block w-100'>Github</button>
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