import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Views/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Dashboard />} />
      </Switch>
    </Router>
  );
}

export default App;
