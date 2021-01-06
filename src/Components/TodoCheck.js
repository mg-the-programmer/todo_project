import React from "react";
import { Checkbox } from "@material-ui/core";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import "./Todo.css";

export default function TodoCheck() {
  return (
    <div className="checkBox">
      <Checkbox
        icon={
          <CircleUnchecked
            style={{
              width: 35,
              height: 40,
              color: "#1b427d",
              backgroundColor: "transparent",
            }}
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
          />
        }
        style={{
          width: 35,
          height: 40,
          color: "#1b427d",
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}
