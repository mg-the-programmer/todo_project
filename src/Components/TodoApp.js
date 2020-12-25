import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import React, { useState, useEffect } from "react";
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
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
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
    <div className="App">
      <h1>Hello Guys </h1>
      <form>
        <FormControl className="input_con">
          <InputLabel>Write your Todos</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary">
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
