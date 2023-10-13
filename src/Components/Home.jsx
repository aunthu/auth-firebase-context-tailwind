import React, { useContext } from 'react';
import { UserContext } from '../Providers/AuthProvider';


const Home = () => {
    const AuthInfo = useContext(UserContext);
    // const { user } = AuthInfo;
    // const {displayName}=AuthInfo.user;
    return (
        <div>
            home page  
            {/* {user && <span>{user.displayName}</span>} */}
        </div>
    );
};

export default Home;