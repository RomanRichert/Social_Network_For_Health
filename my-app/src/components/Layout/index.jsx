import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import style from './index.module.css'
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
