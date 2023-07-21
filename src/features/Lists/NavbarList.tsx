import React, { ChangeEvent, KeyboardEvent, useState } from "react";
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
  const [showInput, setShowInput] = useState(false)
  const [newTitle, setNewTitle] = useState( '')
  let lists = useAppSelector(ListsSelector);
  const dispatch = useAppDispatch()
  const addListHandler = () => {
    dispatch(addListTC(newTitle))
    setShowInput(false)
  }
  const keyDownHandler = (key: KeyboardEvent<HTMLInputElement>) => {
    if (key.key === 'Enter') addListHandler()
  }
  const setTitleHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value)
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
        {showInput ? <div className={style.navbarItem}>
            <input autoFocus={true} placeholder={"Title"} onChange={setTitleHandler} value={newTitle} onBlur={addListHandler} onKeyDown={keyDownHandler}></input>
        </div>
          : <div className={`${style.navbarItem} ${style.addNavbarItem}`} onClick={() => setShowInput(true)}>
          <i>+ Add new project</i>
        </div>}
    </>
  );
};

