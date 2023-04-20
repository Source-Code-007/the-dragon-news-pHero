import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Signup.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
    const { createUserFunc, updateUserProfileFunc, emailVerificationFunc } = useContext(authContext)
    const [ showPass, setShowPass ] = useState(true)

    // register submit func
    const signupSubmitFunc = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        createUserFunc(email, password).then(res => {
            const currUser = res.user
            // updater user profile info
            updateUserProfileFunc(currUser, name).then(() => {
                console.log('user profile update');
            }).catch(e => {
                console.log(e.message);
            })
            // email verification
            emailVerificationFunc(currUser).then(() => {
                console.log('Email verification sent!');
            });
        }).catch(e => {
            console.log(e.message)
        })
    }

    return (

        <div className='vh-100 w-25 mx-auto d-flex align-items-center justify-content-center'>
            <Form onSubmit={signupSubmitFunc} className='w-100 shadow-lg text-black d-flex flex-column justify-content-center align-items-center p-5 rounded text-light'>
                <h4>Please register!</h4>
                <Form.Group className="mb-3 w-100">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className='my-inp' id='signupName' name='name' type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3 w-100" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='my-inp' id='signupEmail' name='email' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3 w-100 position-relative" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='my-inp' name='password' type={showPass? 'password' : 'text'} placeholder="Password" />
                    <span onClick={()=> setShowPass(!showPass)} className='position-absolute' style={{right: '8px', bottom: '8px'}}> { showPass ? <FaEyeSlash/> : <FaEye/> } </span>
                </Form.Group>
                <Button type='submit' variant='success' className='w-100'>Register</Button>
                <h6 className='mt-3'>Already have an account? <Link to='/signin'>Login</Link></h6>
            </Form>
        </div>
    );
};

export default Signup;