import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthContext';
import './Header.css'
import logo from '../../assets/img/logo.png'
import Marquee from "react-fast-marquee";
import moment from 'moment';


const Header = () => {
    const { user, setUser, signOutFunc, loading } = useContext(authContext)

    // sign out func
    const handleSignOut = () => {
        signOutFunc().then(() => {
            setUser(null)
            console.log('sign out successfully');
        }).catch(e => {
            console.log(e.message);
        })
    }

    return (
        <header className='py-3'>
            <div className="container text-center">
                <div>
                    <img src={logo} alt="" />
                    <p className='my-3'>Journalism Without Fear or Favour</p>
                    <p className='my-3'> {moment().format('MMMM Do YYYY, h:mm:ss a')} </p>
                </div>
                <div className='d-flex gap-2 py-4 px-3 my-3 shadow rounded'>
                    <button className='btn btn-primary'>Latest</button>
                    <Marquee>
                        <p className='d-flex align-items-center'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                    </Marquee>
                </div>
                <Navbar className='shadow p-2' expand="lg">
                    <Link to='/' className='text-light fw-bold text-dark text-decoration-none display-6'>The Dragon News</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto" style={{ fontSize: '22px' }}>
                            <Link to='/home' className='text-decoration-none text-dark mx-2'>Home</Link>
                            <Link to='/services' className='text-decoration-none text-dark mx-2'>Services</Link>
                            <Link to='/about' className='text-decoration-none text-dark mx-2'>About</Link>
                        </Nav>
                        <div>
                            {
                                loading ? <div className='animate-spinner'></div> : user ? <>
                                    <img style={{ height: '40px', width: '40px' }} className='rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-haj5_5sYRCMxDHs-SoW1CG_OKySGAk5J700xjLM&s" alt="" />
                                    <Link to='/' onClick={handleSignOut} className='text-decoration-none text-light mx-2'><button className='btn btn-secondary'>Logout</button></Link>
                                </> : <Link to='/signin' className='text-decoration-none mx-2'><button className='btn btn-secondary'>Login</button></Link>
                            }
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        </header>
    );
};

export default Header;