import React from "react";
import { Link } from "react-router-dom";

import Random from "./Components/Random";
import "./HomePage.css";
import apple from "./Icons/apple.png";

import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";

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
      {/* <TodoForm /> */}
    </div>
  );
}
