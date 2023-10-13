import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Providers/AuthProvider';

const Header = () => {
    const { user, LogOut } = useContext(UserContext);
    console.log(user);
    // Sign out event handler function
    const handleSignOut = () => {
        LogOut()
            .then(() => {

            })
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content ">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <div>
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                    {user&&
                    <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
                    }
                    {user ? <>
                        <span>{user.email}</span>
                        <button className="btn btn-primary" onClick={handleSignOut}>Sign Out</button>
                    </> : <Link to='/login'>Sign in</Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;