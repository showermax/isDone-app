import React from "react";
import { NavLink } from "react-router-dom";
import style from "../../pages/Navbar.module.css";


export const TopNavbarList = () => {

  return (
    <>
      <NavLink to={"Inbox"}>
        <div className={style.navbarItem} >
          Inbox
        </div>
      </NavLink>

      <NavLink to={"Today"}>
        <div className={style.navbarItem} >
          Today
        </div>
      </NavLink>
      <NavLink to={"Filters"}>
        <div className={style.navbarItem} >
          Filters
        </div>
      </NavLink>
    </>
  );
};

