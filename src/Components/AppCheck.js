import React from "react";

export default function AppCheck({ title }) {
  return (
    <div>
      <label>
        <input type="checkbox" className="checkBox" name="remember" />
        {title}
      </label>
    </div>
  );
}
