import React from "react";
import { NavLink } from "react-router-dom";
import style from "../../pages/Navbar.module.css";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/hooks";
import { ListsSelector } from "../../app/Selectors";
import { addListTC } from "../../entities/todolist/ListReducer";

type PropsType = {
  showForToday: (s: string) => void;
};
export const NavbarList = (props: PropsType) => {
  const { showForToday } = props;
  let lists = useAppSelector(ListsSelector);
  const dispatch = useAppDispatch()
  const addListHandler = () => {
    dispatch(addListTC('newProject'))
  }
  return (
    <>
      {lists
        .filter((el) => el.title !== "Inbox")
        .map((el) => (
          <NavLink key={el.id} to={el.title}>
            <div className={style.navbarItem} onClick={() => showForToday("")}>
              {el.title}
            </div>
          </NavLink>
        ))}
      <div className={`${style.navbarItem} ${style.addNavbarItem}` } onClick={addListHandler}>
       <i>+ Add new project</i>
      </div>
    </>
  );
};

