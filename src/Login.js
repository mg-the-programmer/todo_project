import React from "react";
import { Link } from "react-router-dom";

import AppButton from "./Components/AppButton";
import AppCheck from "./Components/AppCheck";
import AppInput from "./Components/AppInput";
import "./Login.css";

export default function Login() {
  document.body.style.backgroundColor = "#1b427d";
  return (
    <div className="container">
      <h1>Log in!</h1>
      <AppInput placeholder="abcd@gmail.com" legend="Email" />
      <AppInput placeholder="Password" legend="Password" type="password" />
      <div className="bottom">
        <AppCheck title="Remember me" />
        <a href="#">Forgot Password?</a>
      </div>

      <Link to="/">
        <AppButton title="Login" />
      </Link>

      <Link to="/signup">
        <AppButton title="Sign Up" style={{ backgroundColor: "#46a049" }} />
      </Link>
    </div>
  );
}
