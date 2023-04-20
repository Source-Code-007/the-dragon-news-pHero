import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const authContext = createContext()
const auth = getAuth(app)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    // create user function 
    const createUserFunc = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // email verification
    const emailVerificationFunc = (currentUser) => {
        return sendEmailVerification(currentUser)
    }

    // signin with email and password func 
    const signinWithEmailPassFunc = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const updateUserProfileFunc = (user, name) => {
        return updateProfile(user, {
            displayName: name
        })
    }

    // hold signin user
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            if(currentUser?.emailVerified){
                setUser(currentUser)
            }
            setLoading(false)
        })
    }, [])


    // signout func
    const signOutFunc = () => {
        return signOut(auth)
    }

    const authObj = {
        createUserFunc,
        emailVerificationFunc,
        signinWithEmailPassFunc,
        updateUserProfileFunc,
        signOutFunc,
        user,
        setUser,
        loading
    }

    return (
        <authContext.Provider value={authObj}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContext;