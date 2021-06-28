import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router";
import { UserProfileContext, userProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Home /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </main>
  )
}