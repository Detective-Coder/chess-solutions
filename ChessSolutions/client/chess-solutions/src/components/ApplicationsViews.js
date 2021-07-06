import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext, UserProfileProvider } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import PuzzleList from "./PuzzleList";
import { PuzzleProvider } from "../providers/PuzzleProvider";
import PuzzleDetails from "./PuzzleDetails";
import { SolutionProvider } from "../providers/SolutionProvider";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <main>
      <Switch>
        <UserProfileProvider>
        <PuzzleProvider>
        <SolutionProvider>

          <Route exact path="/">
            <PuzzleList /> 
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route exact path="/puzzle/:id(\d+)/solutions">
            <PuzzleDetails /> 
          </Route>
          
        </SolutionProvider>
        </PuzzleProvider>
        </UserProfileProvider>
      </Switch>
    </main>
  );
};