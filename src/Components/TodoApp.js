import {
  Button,
  FormControl,
  InputLabel,
  Input,
  IconButton,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

import Todo from "./Todo";
import "./TodoApp.css";
import db from "../firebase.js";
import firebase from "firebase";

export default function TodoApp() {
  document.body.style.backgroundColor = "#ffffff";

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("Todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    if (!input || /^\s*$/.test(input)) {
      return setInput("");
    }

    db.collection("Todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos]);
    setInput("");
  };

  return (
    <div className="todoListCon">
      <header className="todoHeader">
        <p>My Tasks </p>
        <MenuRoundedIcon />
      </header>
      <form className="todoInputCon">
        <IconButton
          type="submit"
          onClick={addTodo}
          style={{
            width: 50,
            height: 40,
          }}>
          <AddCircleIcon
            style={{
              color: "#1b427d",
              width: 50,
              height: 40,
              padding: 0,
              margin: 0,
            }}
          />
        </IconButton>
        <input
          className="todoInput"
          value={input}
          placeholder="New Task"
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
      {todos.map((todo) => (
        <Todo todo={todo} />
        // <li>{todo}</li>
      ))}
    </div>
  );
}
