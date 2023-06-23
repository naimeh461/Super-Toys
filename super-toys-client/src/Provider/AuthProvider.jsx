import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);
    //Google
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    //email password create user
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
     // sign in with email and password
     const signInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //GitHub
    const gitHubProvider = new GithubAuthProvider();
    const gitHubUser = () => {
        setLoading(true)
        return signInWithPopup(auth,gitHubProvider)
    }

     //logOut
     const logOut = () => {
        setLoading(true)
        return signOut(auth)
     }

     //update image and name
     const updateImgName = (name,photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    //user Status
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, loggedUser => {
         setUser(loggedUser);
         setLoading(false);
     })
     return()  => {
         return unsubscribe();
     }
     },[])
    const authInfo = {loading,googleSignIn,createUser,gitHubUser,logOut,updateImgName,signInUser,user}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;