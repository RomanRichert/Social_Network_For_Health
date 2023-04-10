import React from "react";
import style from "./index.module.css";

export default function Button({ children, className, ...props }) {
  return (
    <button {...props} className={[style.button_block, className].join(" ")}>
      {children}
    </button>
  );
}
