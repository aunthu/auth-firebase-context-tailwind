import React, { useContext } from 'react';
import { UserContext } from '../../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const {user, loading}=useContext(UserContext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    else if(user){
        return children;
    }
    
    else{
        return <Navigate to='/login' replace={true}></Navigate>
    }
};

export default PrivateRoutes;