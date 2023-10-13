import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Providers/AuthProvider';

const Login = () => {
    const {user, SignIn, SignInWithGoogle}= useContext(UserContext);
    // console.log(user.displayName);
    // Google login handler
    const handleGoogleLogin=event=>{
        SignInWithGoogle()
         .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
         })
         .catch(error=>console.log(error.message))
    }

    // Login Handler
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
        SignIn(email, password)
         .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
         })
         .catch(error=>{
            console.log(error.message);
         })
        event.target.reset();
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                                name='password'
                                className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <Link to="/register" >
                        <button className="btn btn-link">
                            New to Auth Master?    
                         </button>
                    </Link>
                    <div>
                        <button onClick={handleGoogleLogin} className="btn btn-info">Google Login</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;