import React, { useState } from "react";
import { Button, List, ListItem, ListItemText, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import db from "../firebase";
import "./Todo.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 100,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Todo(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updateTodo = (event) => {
    if (!input) {
      input = props.todo.todo;
    }

    db.collection("Todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    handleClose();
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <h1>I am a Modal</h1>
          <form>
            <input
              placeholder={props.todo.todo}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              onClick={updateTodo}
              color="primary"
              variant="contained"
              type="submit">
              Update Todo
            </Button>
          </form>
        </div>
      </Modal>
      <div className="todoContainer">
        <List className="todo_list">
          <ListItem>
            {/* <ListItemAvatar></ListItemAvatar> */}
            <ListItemText
              primary={props.todo.todo}
              secondary="The dummy deadline"
            />
          </ListItem>
          <button onClick={handleOpen}>Edit</button>
          <DeleteForeverIcon
            style={{ cursor: "pointer" }}
            onClick={(event) =>
              db.collection("Todos").doc(props.todo.id).delete()
            }></DeleteForeverIcon>
        </List>
      </div>
    </>
  );
}
