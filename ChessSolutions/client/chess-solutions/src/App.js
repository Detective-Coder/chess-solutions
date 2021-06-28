import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import ApplicationViews from "./components/ApplicationsViews";

function App() {
  return (
    <Router>
      <Header />
      <ApplicationViews />
    </Router>
  );
}

export default App;
