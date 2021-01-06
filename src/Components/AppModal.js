import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import db from "../firebase";
import { Modal, Button } from "@material-ui/core";

import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[15],
    padding: 20,
    color: "#1b427d",
    // padding: theme.spacing(2, 4, 3),
  },
}));

export default function AppModal({ todo, id, onClose, ...props }) {
  const classes = useStyles();

  const [input, setInput] = useState("");

  const updateTodo = (event) => {
    event.preventDefault();
    if (!input) {
      return (input = todo);
    }

    db.collection("Todos").doc(id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setInput("");
    onClose();
  };

  return (
    <div>
      <Modal {...props}>
        <div className={classes.paper}>
          <header className="modalNav">
            <DeleteOutlinedIcon
              fontSize="large"
              onClick={(event) => db.collection("Todos").doc(id).delete()}
            />
            <CloseOutlinedIcon onClick={onClose} fontSize="large" />
          </header>
          <form className="editCon">
            <input
              placeholder={todo}
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
    </div>
  );
}
