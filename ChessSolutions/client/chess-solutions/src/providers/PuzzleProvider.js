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

  const getPuzzleWithSolutions = (id) => {
    return getToken().then((token) => 
     fetch(`/api/puzzle/${id}/solutions`, {
       method: "GET",
       headers: {
         Authorization: `Bearer ${token}`
       }
     }).then((res) => res.json()))
  }

  const addSolutionToPuzzleById = (id) => {
    return getToken().then((token) => 
      fetch(`/api/puzzle/${id}/solutions`, {
       method: "POST",
       headers: {
         Authorization: `Bearer ${token}`,
         "Content-Type": "application/json",
       },
       body: JSON.stringify(puzzle),
     })
  )};

   return (
     <PuzzleContext.Provider value = {{ puzzles, getAllPuzzles, getPuzzle, getPuzzleWithSolutions, addSolutionToPuzzleById }}>
       {props.children}
     </PuzzleContext.Provider>
   )
}