import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="container">
      <h1>Log in!</h1>
      <fieldset className="inputBoxCon">
        <input placeholder="abcd@gmail.com" className="inputBox"></input>
        <legend>Email Address</legend>
      </fieldset>
      <fieldset className="inputBoxCon">
        <input
          placeholder="Password"
          type="password"
          className="inputBox"></input>
        <legend>Password</legend>
      </fieldset>
      <div className="bottom">
        <label>
          <input type="checkbox" name="remember" />
          Remember Me
        </label>
        <a href="#" style={{ marginLeft: 140 }}>
          Forgot Password?
        </a>
      </div>
      <div className="btnCon">
        <button className="logBtn">Log in</button>
        <button className="logBtn" style={{ backgroundColor: "#4CAF50" }}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
