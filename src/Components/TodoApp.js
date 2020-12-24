import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import React, { useState } from "react";
import Todo from "./Todo";

export default function TodoApp() {
  document.body.style.backgroundColor = "#ffffff";

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  console.log(input);

  const addTodo = (event) => {
    event.preventDefault();

    if (!input || /^\s*$/.test(input)) {
      return setInput("");
    }

    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello Guys </h1>
      <form>
        <FormControl>
          <InputLabel>Write your Todos</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            type="submit"
            onClick={addTodo}
            variant="contained"
            color="primary">
            Add Todo
          </Button>
        </FormControl>
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
