import React, { useContext } from 'react';
import { authContext } from '../../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import './PrivateRoute.css'

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(authContext)
    const location = useLocation()

    if (loading) {
        return <div className='text-center d-flex justify-content-center align-items-center' style={{ height: '300px' }}><div className='animate-spinner'></div></div>
    }

    if (!user) {
        return <Navigate to='/signin' state={location}></Navigate>
    }

    return (
        children
    );
};

export default PrivateRoute;