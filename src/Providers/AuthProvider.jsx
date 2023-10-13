import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const UserContext = createContext(null);
// Firebase auth for AuthMaster
const auth = getAuth(app);
const googleProvider= new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // Create user 
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Sign in with email and password
    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Sign in with google 
    const SignInWithGoogle=()=>{
        return signInWithPopup(auth, googleProvider);
    }
    const LogOut=()=>{
        return signOut(auth);
    }
    // Observe auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        }
    }, [])

    // Value for UserContext.Provider
    const AuthInfo = {
        user,
        CreateUser,
        SignIn,
        SignInWithGoogle,
        LogOut,
        loading

    }
    return (
        <UserContext.Provider value={AuthInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;