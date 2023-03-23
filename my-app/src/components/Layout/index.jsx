import React from "react";
import Header from "../Header";
import style from './index.module.css'

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className = {style.layout}>
      <Header />
      <main className= {style.body}>
        <Outlet />
      </main>
    </div>
  );
}
