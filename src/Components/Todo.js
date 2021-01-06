import React, { useState } from "react";
import { IconButton, List } from "@material-ui/core";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

import db from "../firebase";
import "./Todo.css";
import AppModal from "./AppModal";
import TodoCheck from "./TodoCheck";

export default function Todo(props) {
  const { todo, id } = props.todo;

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editTodo = (event) => {
    setInput(event.target.value);
    event.preventDefault();
    db.collection("Todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
  };

  return (
    <div className="todoContainer">
      <AppModal open={open} todo={todo} id={id} onClose={handleClose} />
      <List className="todo_list">
        <TodoCheck />
        <div className="contentCon">
          <input className="todoText" value={todo} onChange={editTodo} />
          <IconButton onClick={handleOpen}>
            <CreateOutlinedIcon style={{ color: "#1b427d" }} />
          </IconButton>
        </div>
      </List>
    </div>
  );
}
