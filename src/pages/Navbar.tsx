import React from "react";
import style from "./Navbar.module.css";
import { TopNavbarList } from "../features/Lists/TopNavbarList";
import { NavbarList } from "../features/Lists/NavbarList";

type PropsType = {
  showForToday: (s: string) => void;
};
export const Navbar = (props: PropsType) => {
  const { showForToday } = props;
  return (
    <>
      <div className={style.navbarGroup}>
        <TopNavbarList showForToday={showForToday}/>
      </div>
      <div className={style.navbarGroup}>
        <NavbarList showForToday={showForToday} />
      </div>
    </>
  );
};
