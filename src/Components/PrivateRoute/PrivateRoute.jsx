import React, { useContext } from 'react';
import { authContext } from '../../AuthContext/AuthContext';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(authContext)
    const location = useLocation()

    if (!user) {
        return <Navigate to='/signin' state={location}></Navigate>
    }

    return (
        children
    );
};

export default PrivateRoute;