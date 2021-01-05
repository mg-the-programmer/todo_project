import React from "react";
import { Link } from "react-router-dom";

import Random from "./Components/Random";
import TodoApp from "./Components/TodoApp";
import "./HomePage.css";
import apple from "./Icons/apple.png";

export default function HomePage() {
  document.body.style.backgroundColor = "#ffffff";
  return (
    <div>
      <header className="page-header">
        <div className="title">
          <Link to="/">
            <img src={apple} className="logo" />
          </Link>
          <h2>TasksBoard</h2>
        </div>
        <Random />
      </header>
      <TodoApp />
    </div>
  );
}
