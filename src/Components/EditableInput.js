import React, { useState } from "react";
import db from "../firebase";

export default function EditableInput({ todo, id }) {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);

  const changeEditMode = () => {
    setEditMode(!editMode);
  };

  const updateTodo = (event) => {
    event.preventDefault();
    setInput(event.target.value);
    db.collection("Todos").doc(id).set(
      {
        todo: input,
      },
      { merge: true }
    );
  };

  const submit = (event) => {
    event.preventDefault();
    setInput(event.target.value);

    db.collection("Todos").doc(id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    changeEditMode();
  };

  const renderEditView = () => {
    return (
      <form className="todoText">
        <input
          className="editInput"
          type="text"
          defaultValue={todo}
          onChange={updateTodo}
        />
        <button style={{ border: "none" }} type="submit" onClick={submit}>
          ✅
        </button>
      </form>
    );
  };

  const renderDefaultView = () => {
    return (
      <div onDoubleClick={changeEditMode} className="normalInput">
        {todo}
      </div>
    );
  };

  return <div>{editMode ? renderEditView() : renderDefaultView()}</div>;
}
