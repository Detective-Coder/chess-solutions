import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from 'react-router-dom';

export const CommentContext = React.createContext();

export const CommentProvider = (props) => {
  const [comments, setComments] = useState([]);
  const { getToken } = useContext(UserProfileContext);
  const history = useHistory();

  const getAllComments = () =>
   getToken().then((token) =>
   fetch("/api/comment", {
     method: "GET",
     headers: {
       Authorization: `Bearer ${token}`
     }
   }).then(res => res.json())
   .then(setComments));

  const addComment = (comment) => {
    return getToken().then((token) => 
      fetch(`/api/comment`, {
       method: "POST",
       headers: {
         Authorization: `Bearer ${token}`,
         "Content-Type": "application/json",
       },
       body: JSON.stringify(comment),
     })
  )};

   return (
     <CommentContext.Provider value = {{ comments, getAllComments, addComment }}>
       {props.children}
     </CommentContext.Provider>
   )
}