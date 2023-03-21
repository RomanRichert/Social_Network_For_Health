import React from "react";
import style from "./index.module.css";

export default function Button() {
  return (
    <div className={style.button_block}>
      <button>back</button>
      <button>forth</button>
    </div>
  );
}
