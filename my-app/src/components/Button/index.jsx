import React from "react";
import style from "./index.module.css";
import cn from 'classnames'

export default function Button({ children, className, ...props }) {
  return (
    <button {...props} className={cn(style.button_block, className)}>
      {children}
    </button>
  );
}
