import React, { useState, useEffect } from "react";
import { IconButton, List } from "@material-ui/core";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import firebase from "firebase";

import db from "../firebase";
import "./Todo.css";
import AppModal from "./AppModal";
import TodoCheck from "./TodoCheck";
import EditableInput from "./EditableInput";

export default function Todo(props) {
  const { todo, id } = props.todo;

  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [comTodos, setComTodos] = useState();

  useEffect(() => {
    db.collection("CompletedTodos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setComTodos(
          snapshot.docs.map((doc) => ({
            comId: doc.id,
            comTodo: doc.data().todo,
          }))
        );
      });
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteTodo = () => {
    db.collection("Todos").doc(id).delete();
  };

  const completedTodo = () => {
    db.collection("CompletedTodos").add({
      todo,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log(comTodos);
    // setComTodos({ todo, id });
    deleteTodo();
  };

  return (
    <div className="todoContainer">
      <AppModal open={open} todo={todo} id={id} onClose={handleClose} />
      <List className="todo_list">
        <TodoCheck onClick={completedTodo} checked={check} />
        <div className="contentCon">
          <EditableInput todo={todo} id={id} />
          <IconButton onClick={handleOpen}>
            <CreateOutlinedIcon style={{ color: "#1b427d" }} />
          </IconButton>
          {/* {comTodos.map((event) => (
            <EditableInput todo={event.comTodo.todo} />
          ))} */}
        </div>
      </List>
    </div>
  );
}
