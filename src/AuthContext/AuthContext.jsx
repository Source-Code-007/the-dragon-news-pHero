import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const authContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

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

    // signin with google
    function signinWithGoogleFunc(){
        return signInWithPopup(auth, googleProvider)
    }

    // signin with github
    function signinWithGithubFunc(){
        return signInWithPopup(auth, githubProvider)
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
        signinWithGoogleFunc,
        signinWithGithubFunc,
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