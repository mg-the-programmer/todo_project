import React from "react";
import { Link } from "react-router-dom";

import AppButton from "./Components/AppButton";
import AppCheck from "./Components/AppCheck";
import AppInput from "./Components/AppInput";

export default function Signup() {
  return (
    <div style={{ marginTop: 200 }}>
      <h1>Sign Up!</h1>
      <AppInput placeholder="Username" legend="Username" />
      <AppInput placeholder="abcd@gmail.com" legend="Email ID" />
      <AppInput placeholder="Password" legend="Password" type="password" />
      <AppCheck title="I agree the terms and conditions" />
      <Link to="/login">
        <AppButton title="Sign Up" />
      </Link>
    </div>
  );
}
