import React from 'react';
import './LayoutMain.css'
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const LayoutMain = () => {
    return (
        <>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
        </>
    );
};

export default LayoutMain;