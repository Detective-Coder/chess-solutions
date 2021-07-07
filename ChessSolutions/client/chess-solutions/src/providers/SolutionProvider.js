import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from 'react-router-dom';

export const SolutionContext = React.createContext();

export const SolutionProvider = (props) => {
  const [solutions, setSolutions] = useState([]);
  const { getToken } = useContext(UserProfileContext);
  const history = useHistory();

  const getAllSolutions = () =>
   getToken().then((token) =>
   fetch("/api/solution", {
     method: "GET",
     headers: {
       Authorization: `Bearer ${token}`
     }
   }).then(res => res.json())
   .then(setSolutions));

  const addSolution = (solution) => {
    return getToken().then((token) => 
      fetch(`/api/solution`, {
       method: "POST",
       headers: {
         Authorization: `Bearer ${token}`,
         "Content-Type": "application/json",
       },
       body: JSON.stringify(solution),
     })
  )};

   return (
     <SolutionContext.Provider value = {{ solutions, getAllSolutions, addSolution }}>
       {props.children}
     </SolutionContext.Provider>
   )
}