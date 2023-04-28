import React from 'react';
import './LayoutMain.css'
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';

const LayoutMain = () => {
    return (
        <>
            <ScrollToTop>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </ScrollToTop>
        </>
    );
};

export default LayoutMain;