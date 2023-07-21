import React from "react";
import { NavLink } from "react-router-dom";
import style from "../../pages/Navbar.module.css";
import { useAppSelector } from "../../shared/hooks/hooks";
import { ListsSelector } from "../../app/Selectors";

type PropsType = {
  showForToday: (s: string) => void;
};
export const NavbarList = (props: PropsType) => {
  const { showForToday } = props;
  let lists = useAppSelector(ListsSelector);
  const addListHandler = () => {

  }
  return (
    <>
      <div className={style.navbarItem} onClick={addListHandler}>
        add new
      </div>
      {lists
        .filter((el) => el.title !== "Inbox")
        .map((el) => (
          <NavLink key={el.id} to={el.title}>
            <div className={style.navbarItem} onClick={() => showForToday("")}>
              {el.title}
            </div>
          </NavLink>
        ))}
    </>
  );
};

