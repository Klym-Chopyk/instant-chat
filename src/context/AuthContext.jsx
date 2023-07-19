/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../firebase";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setloading] = useState(true);

    const signinWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect (auth, provider)
    }

    const logout = () => signOut(auth) ({

    });

    const value = {
        currentUser,
        setCurrentUser,
        signinWithGoogle,
        logout
    }

    useEffect (() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setloading(false);
        });

        return unsubscribe;
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}

export const UserAuth = () => {
    return useContext(AuthContext);
}