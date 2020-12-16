import React, { useState } from "react";

export default function TodoForm() {
  const [input, setInput] = useState("");

  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Enter a Task"
        value={input}
        name="text"
        className="todo-input"
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
}
