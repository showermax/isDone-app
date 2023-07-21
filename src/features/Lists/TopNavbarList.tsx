import React from "react";
import { NavLink } from "react-router-dom";
import style from "../../pages/Navbar.module.css";

type PropsType = {
  showForToday: (s: string) => void;
};
export const TopNavbarList = (props: PropsType) => {
  const { showForToday } = props;
  return (
    <>
      <NavLink to={"Inbox"}>
        <div className={style.navbarItem} onClick={() => showForToday("")}>
          Inbox
        </div>
      </NavLink>

      <NavLink to={"Inbox"}>
        <div className={style.navbarItem} onClick={() => showForToday("Today")}>
          Today
        </div>
      </NavLink>
    </>
  );
};
