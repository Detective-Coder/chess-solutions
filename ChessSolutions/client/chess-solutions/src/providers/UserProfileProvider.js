import React, { useState, useEffect, createContext } from "react";
import { Spinner } from "reactstrap";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from 'react-router-dom';

export const UserProfileContext = createContext();

export function UserProfileProvider(props) {
  const apiUrl = "/api/userprofile";
  const history = useHistory();

  const userProfile = sessionStorage.getItem("userProfile");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isFirebaseReady, setIsFirebaseReady] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((u) => {
      setIsFirebaseReady(true);
    });
  }, []);

  const login = (email, pw) => {
    console.log(email, pw);
    return firebase.auth().signInWithEmailAndPassword(email, pw)
      .then((signInResponse) => {
        console.log(signInResponse)
        return getUserProfile(signInResponse.user.uid)
      })
      .then((userProfile) => {
        sessionStorage.setItem("userProfile", JSON.stringify(userProfile))
        setIsLoggedIn(true);
        history.push("/")
      });
  };

  const logout = () => {
    return firebase.auth().signOut()
      .then(() => {
        sessionStorage.clear()
        setIsLoggedIn(false);
        history.push("/login");
      });
  };

  const register = (userProfile, password) => {
    return firebase.auth().createUserWithEmailAndPassword(userProfile.email, password)
      .then((createResponse) => saveUser({ ...userProfile, firebaseUserId: createResponse.user.uid }))
      .then((savedUserProfile) => {
        sessionStorage.setItem("userProfile", JSON.stringify(savedUserProfile))
        setIsLoggedIn(true);
      });
  };

  const getToken = () => firebase.auth().currentUser.getIdToken();

  const getUserProfile = (firebaseUserId) => {
    return getToken().then((token) =>
      fetch(`${apiUrl}/${firebaseUserId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => resp.json()));
  };

  const saveUser = (userProfile) => {
    return getToken().then((token) =>
     fetch(apiUrl, {
       method: "POST",
       headers: {
         Authorization: `Bearer ${token}`,
         "Content-Type": "application/json"
       },
       body: JSON.stringify(userProfile)
     }).then(resp => resp.json()));
  };

  return (
    <UserProfileContext.Provider value={{ isLoggedIn, login, logout, register, getToken }}>
      {isFirebaseReady
        ? props.children
        : <Spinner className="app-spinner dark"/>}
    </UserProfileContext.Provider>
  );
}