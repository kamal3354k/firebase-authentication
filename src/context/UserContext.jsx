import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  function SignUpFunction(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function LoginFunction(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function LogoutFunction(){
    signOut(auth)
  }
  function googleLoginFunciton(){
    const googleAuthProvider = new GoogleAuthProvider()
    return signInWithPopup(auth,googleAuthProvider)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <UserAuthContext.Provider value={{ user, SignUpFunction, LoginFunction ,LogoutFunction,googleLoginFunciton}}>
      {children}
    </UserAuthContext.Provider>
  );
};

export function useUserAuth() {
  return useContext(UserAuthContext);
}
