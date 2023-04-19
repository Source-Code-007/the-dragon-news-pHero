import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
        </>
    );
};

export default Layout;