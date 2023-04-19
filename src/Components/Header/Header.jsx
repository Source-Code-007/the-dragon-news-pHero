import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthContext';


const Header = () => {
    const {name} = useContext(authContext)
    console.log(name);
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Link to='/' className='text-light fw-bold text-decoration-none display-6'>The Dragon News</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/home' className='text-decoration-none text-light mx-2'>Home</Link>
                        <Link to='/services' className='text-decoration-none text-light mx-2'>Services</Link>
                        <Link to='/Signin' className='text-decoration-none text-light mx-2'>Signin</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;