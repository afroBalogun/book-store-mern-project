import { Children, createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,  onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup, signOut } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

const googleProvider = new GoogleAuthProvider()
// const auth = getAuth();


// AuthProvider
export default function AuthProvide({children}) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // registerUser
    async function registerUser (email, password){
        return await createUserWithEmailAndPassword(auth, email, password)
    }

    // login the user
    async function loginUser (email, password){
        return await signInWithEmailAndPassword(auth, email, password)

    }

    // sign up with google
    async function signInWithGoogle(){
        return await signInWithPopup(auth, googleProvider)
    }

    function logout(){
        return signOut(auth)
    }

    // manage user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
            if (user) {
                const {email, displayName, photoURL} = user;
                const userData = {
                    email, userName: displayName, photo: photoURL
                }
            } 
          });

          return () => unsubscribe();
    }, [])
    


    const value = {
        currentUser,
        loading,  
        registerUser,
        loginUser,
        logout,
        signInWithGoogle
    }

   return(
        <AuthContext.Provider value= {value}>
            {children}
        </AuthContext.Provider>
   )
}