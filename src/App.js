import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoApp from "./Components/TodoApp";
import HomePage from "./HomePage";

import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [todos, setTodos] = useState([
    "Need to finished todo app before 16th",
    "For that need sign up page",
  ]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
