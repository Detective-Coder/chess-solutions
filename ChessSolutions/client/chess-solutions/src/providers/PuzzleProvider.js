import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from 'react-router-dom';

export const PuzzleContext = React.createContext();

export const PuzzleProvider = (props) => {
  const [puzzles, setPuzzles] = useState([]);
  const { getToken } = useContext(UserProfileContext);
  const history = useHistory();

  const getAllPuzzles = () =>
  getToken().then((token) =>
   fetch("/api/puzzle", {
     method: "GET",
     headers: {
       Authorization: `Bearer ${token}`
     }
   }).then(res => res.json())
   .then(setPuzzles));

   const getPuzzle = (id) => {
     return getToken().then((token) => 
      fetch(`/api/puzzle/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => res.json()))
   }

   return (
     <PuzzleContext.Provider value = {{ puzzles, getAllPuzzles, getPuzzle }}>
       {props.children}
     </PuzzleContext.Provider>
   )
}