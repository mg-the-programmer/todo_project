import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import db from "../firebase";
import { Modal, Button } from "@material-ui/core";

import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import EditableInput from "./EditableInput";

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
    outline: "none",
    border: "none",
    // padding:"10px"
    // padding: theme.spacing(2, 4, 3),
  },
}));

export default function AppModal({ todo, id, onClose, ...props }) {
  const classes = useStyles();

  const buttonStyle = {
    cursor: "pointer",
  };

  const [input, setInput] = useState("");

  const deleteTodo = () => {
    db.collection("Todos").doc(id).delete();
    onClose();
  };

  return (
    <div>
      <Modal {...props}>
        <div className={classes.paper}>
          <header className="modalNav">
            <DeleteOutlinedIcon
              style={buttonStyle}
              fontSize="large"
              onClick={deleteTodo}
            />
            <CloseOutlinedIcon
              style={buttonStyle}
              onClick={onClose}
              fontSize="large"
            />
          </header>
          <form className="editCon">
            <EditableInput todo={todo} id={id} />
            {/* <span>{todo}</span> */}
          </form>
        </div>
      </Modal>
    </div>
  );
}
