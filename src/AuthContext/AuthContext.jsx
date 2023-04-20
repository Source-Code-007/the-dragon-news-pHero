import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const authContext = createContext()
const auth = getAuth(app)

const AuthContext = ({children}) => {
    const [user, setUser] = useState()

    // create user function 
    const createUserFunc = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin with email and password func 
    const signinWithEmailPassFunc = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const updateUserProfileFunc = (user, name)=>{
        return updateProfile(user,{
            displayName: name
        })
    }

    // signout func
    const signOutFunc = ()=>{
        return signOut(auth)
    }

    const authObj = {
        createUserFunc,
        signinWithEmailPassFunc,
        updateUserProfileFunc,
        signOutFunc,
        user,
        setUser
    }

    return (
        <authContext.Provider value={authObj}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContext;