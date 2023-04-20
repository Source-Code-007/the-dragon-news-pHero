import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import './Signin.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthContext';

const Signin = () => {
    const { signinWithEmailPassFunc, setUser } = useContext(authContext)

    const signinSubmitFunc = (e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
    
        signinWithEmailPassFunc(email, password).then(res=>{
            const currUser = res.user
            setUser(currUser)
        }).catch(e=>{
            console.log(e.message)
        })
    }

    return (

        <div className='vh-100 w-25 mx-auto d-flex align-items-center justify-content-center'>
            <Form onSubmit={signinSubmitFunc} className='w-100 shadow-lg text-black d-flex flex-column justify-content-center align-items-center p-5 rounded text-light'>
            <h4>Please login!</h4>
                <Form.Group className="mb-3 w-100" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='my-inp' name='email' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3 w-100" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='my-inp' name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Button type='submit' variant='success' className='w-100'>Login</Button>
                <h6 className='mt-3'>Don't have an account? <Link to='/signup'>Register</Link></h6>
            </Form>
        </div>

    );
};

export default Signin;