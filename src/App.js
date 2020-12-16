import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
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
            <h1>Hello World</h1>
          </Route>
          {/* <Signup /> */}
          {/* <h1>Hello Everyone </h1>
      <input />
      <button>Add Todo</button>
      <ul>
        <li></li>
        <li></li>
      </ul> */}
          {/* <Login /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
