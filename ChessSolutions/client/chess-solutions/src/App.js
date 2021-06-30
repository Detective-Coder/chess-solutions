import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import ApplicationViews from "./components/ApplicationsViews";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import { PuzzleProvider } from "./providers/PuzzleProvider";

function App() {
  return (
    <Router>
      <UserProfileProvider>
      <PuzzleProvider>
        <Header />
        <ApplicationViews />
      </PuzzleProvider>
      </UserProfileProvider>
    </Router>
  );
}

export default App;
