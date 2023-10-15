import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // SignUp with Email and Password
  const createUser = (email, password) => {
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
    createUser,
    SignInUser,
    signOutUser
  };

  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  )
}

export default AuthProvider

AuthProvider.propTypes = {
  children: PropTypes.node
}