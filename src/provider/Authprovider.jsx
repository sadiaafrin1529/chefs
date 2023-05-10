import React, { createContext, useState } from "react";
import {
    GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);

const Authprovider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProviderProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading,setLoading]=useState(false)

  const GoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

//   GIthub 
  const githublogin = ()=>{
    signInWithPopup(auth, githubProviderProvider)
    .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  // regristration
  const regristration = (email, password,username,userUrl) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: userUrl
        }).then(() => {
        }).catch((error) => {
        });
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  //login
  const login = (email,password) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user =result.user;
        setUser(user);
        setLoading(false)
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

    //   on auth change 
    useEffect(()=>{
      setLoading(true)
        const unSubscribe =  onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        });
        return ()=>{
        return  unSubscribe()
        }
    },[])

    const logout = ()=>{
        signOut(auth).then(() => {
          }).catch((error) => {
          });
          
    }

  const information = {
    user,
    GoogleSingIn,
    regristration,
    error,
    login,
    githublogin,
    logout,
    loading
  };
  return (
    <AuthContext.Provider value={information}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
