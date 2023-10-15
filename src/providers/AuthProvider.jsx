import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  // SignIn with Google
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  }
  // SignUp with Email and Password
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // SignIn with Email and Password
  const SignInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Sign Out User
  const signOutUser = () => {
    return signOut(auth);
  }

  // On UserState Change
  useEffect(() => {
    setLoading(true);
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);

      return () => {
        unSubscribe();
      }
    })
  }, []);

  // Auth Info
  const authInfo = {
    user,
    loading,
    googleSignIn,
    signUpUser,
    SignInUser,
    signOutUser
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

AuthProvider.propTypes = {
  children: PropTypes.node
}