import React from "react";
import style from "./index.module.css";

export default function Button({ children }) {
  return (
    <div className={style.button_block}>
      <button>{children}</button>
    </div>
  );
}
