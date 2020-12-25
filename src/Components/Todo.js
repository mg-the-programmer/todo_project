import React, { useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import db from "../firebase";
import "./Todo.css";

export default function Todo(props) {
  // const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="todoContainer">
      <Modal open={open} onClose={handleClose}>
        <div>
          <p>I am a Modal</p>
          <Button onClick={handleClose}>Update Todo</Button>
        </div>
      </Modal>
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
  );
}
