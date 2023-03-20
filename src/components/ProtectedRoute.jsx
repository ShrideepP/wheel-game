import React from 'react';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const { userInfo } = UserContext();

    if(!userInfo.email && !userInfo.phone) return <Navigate to='/' />
    
    return children;

};

export default ProtectedRoute;