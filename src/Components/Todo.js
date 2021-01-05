import React, { useState } from "react";
import {
  Button,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";

import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

import db from "../firebase";
import "./Todo.css";
import AppModal from "./AppModal";

export default function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [check, setCheck] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = () => {
    setCheck(true);
  };
  const updateTodo = (event) => {
    event.preventDefault();

    if (!input || /^\s*$/.test(input)) {
      return setInput("");
    }

    db.collection("Todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    handleClose();
  };

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

  const completed = () => {
    alert("Completed");
  };

  return (
    <>
      {/* <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <header className="modalNav">
            <DeleteOutlinedIcon
              fontSize="large"
              onClick={(event) =>
                db.collection("Todos").doc(props.todo.id).delete()
              }
            />
            <CloseOutlinedIcon onClick={handleClose} fontSize="large" />
          </header>
          <form className="editCon">
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
      </Modal> */}
      <div className="todoContainer">
        <AppModal open={open} onClose={handleClose} todo={props.todo.todo} />
        <List className="todo_list">
          <Checkbox
            onChange={handleChange}
            icon={
              <CircleUnchecked
                style={{
                  width: 35,
                  height: 40,
                  color: "#1b427d",
                  backgroundColor: "transparent",
                }}
                className="checkBox"
              />
            }
            checkedIcon={
              <CircleCheckedFilled
                style={{
                  width: 35,
                  height: 40,
                  color: "green",
                  backgroundColor: "transparent",
                }}
                className="checkBox"
              />
            }
            style={{
              width: 35,
              height: 40,
              color: "#1b427d",
              backgroundColor: "transparent",
            }}
            className="checkBox"
          />
          <div className="contentCon">
            <input
              className="todoText"
              value={props.todo.todo} /* onChange={editTodo} */
            />
            <IconButton onClick={handleOpen}>
              <CreateOutlinedIcon style={{ color: "#1b427d" }} />
            </IconButton>
          </div>
        </List>
      </div>
    </>
  );
}
