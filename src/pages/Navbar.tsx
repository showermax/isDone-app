import React from "react";
import style from "./Navbar.module.css";
import { TopNavbarList } from "../features/Lists/TopNavbarList";
import { NavbarList } from "../features/Lists/NavbarList";


export const Navbar = () => {

  return (
    <>
      <div className={style.navbarGroup}>
        <TopNavbarList />
      </div>
      <div className={style.navbarGroup}>
        <NavbarList/>
      </div>
    </>
  );
};
