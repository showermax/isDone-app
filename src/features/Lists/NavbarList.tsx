import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "../../pages/Navbar.module.css";
import dotsIco from "../../assets/icons/dots.svg";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/hooks";
import { ListsSelector } from "../../app/Selectors";
import { addListTC } from "../../entities/todolist/ListReducer";
import editIco from "../../assets/icons/edit.svg";
import deleteIco from "../../assets/icons/delete.svg";

type PropsType = {
  showForToday: (s: string) => void;
};
export const NavbarList = (props: PropsType) => {
  const { showForToday } = props;
  const [showInput, setShowInput] = useState(false)
  const [showSubmenu, setShowSubmenu] = useState([false,''])
  const [newTitle, setNewTitle] = useState( '')
  let lists = useAppSelector(ListsSelector);
  const dispatch = useAppDispatch()
  const addListHandler = () => {
    dispatch(addListTC(newTitle))
    setShowInput(false)
  }
  const showSubmenuHandler = (id:string) =>{
    setShowSubmenu([!showSubmenu[0],id])
  }
  const editListHandler = () =>{}
  const deleteListHandler = () =>{}
  const keyDownHandler = (key: KeyboardEvent<HTMLInputElement>) => {
    if (key.key === 'Enter') addListHandler()
  }
  const setTitleHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value)
  }
  console.log(showSubmenu);
  return (
    <>
      {lists
        .filter((el) => el.title !== "Inbox")
        .map((el) => (
          <NavLink key={el.id} to={el.title}>
            <div className={style.navbarItem} onClick={() => showForToday("")}>
              <div>{el.title}</div>
              <img className={style.threeDots} src={dotsIco} alt="delete or edit the project" onClick={()=> {showSubmenuHandler(el.id)}
              }/>
              {showSubmenu[0] && showSubmenu[1]===el.id && <div className={style.subMenu}>
                <img className={style.item_right_ico} src={editIco} alt={"edit task"} onClick={editListHandler} />
                <img className={style.item_right_ico} src={deleteIco} alt={"delete task"} onClick={deleteListHandler} />
              </div>}
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

