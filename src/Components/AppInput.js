import React from "react";
import "./AppInput.css";

export default function AppInput({ placeholder, legend, type }) {
  return (
    <div>
      <fieldset className="inputBoxCon">
        <input
          placeholder={placeholder}
          className="inputBox"
          type={type}></input>
        <legend>{legend}</legend>
      </fieldset>
    </div>
  );
}
