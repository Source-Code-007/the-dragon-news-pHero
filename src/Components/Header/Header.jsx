import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthContext';


const Header = () => {
    const { user, setUser, signOutFunc } = useContext(authContext)

    // sign out func
    const handleSignOut = ()=>{
        signOutFunc().then(()=>{
            setUser(null)
            console.log('sign out successfully');
        }).catch(e => {
            console.log(e.message);
        })
    }
    
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Link to='/' className='text-light fw-bold text-decoration-none display-6'>The Dragon News</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto" style={{ fontSize: '22px' }}>
                        <Link to='/home' className='text-decoration-none text-light mx-2'>Home</Link>
                        <Link to='/services' className='text-decoration-none text-light mx-2'>Services</Link>
                        <Link to='/Signin' className='text-decoration-none text-light mx-2'>About</Link>
                    </Nav>
                    <div>
                        {
                            user ? <>
                                <img style={{ height: '40px', width: '40px' }} className='rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-haj5_5sYRCMxDHs-SoW1CG_OKySGAk5J700xjLM&s" alt="" />
                                <Link to='/Signin' onClick={handleSignOut} className='text-decoration-none text-light mx-2'><button className='btn btn-secondary'>Logout</button></Link>
                            </> : <Link to='/Signin' className='text-decoration-none text-light mx-2'><button className='btn btn-secondary'>Login</button></Link>
                        }

                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;