import React from "react";
import Style from "style-it";

export default function AppButton({ title, style }) {
  return (
    <Style>
      {`
        .logBtn {
          color: #1b427d;
          font-weight: bold;
          font-size: 23px;
          padding: 5px 30px;
          margin-top: 80px;
          border: none;
          cursor: pointer;
          outline: none;
          margin:0px 30px;
          margin-top:80px;
        }
        .logBtn:hover {
          opacity: 0.6;
        }
      `}
      <button className="logBtn" style={style}>
        {title}
      </button>
    </Style>
  );
}
