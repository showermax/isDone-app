import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "../../pages/Navbar.module.css";
import dotsIco from "../../assets/icons/dots.svg";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/hooks";
import { ListsSelector } from "../../app/Selectors";
import { addListTC, deleteListTC } from "../../entities/todolist/ListReducer";
import editIco from "../../assets/icons/edit.svg";
import deleteIco from "../../assets/icons/delete.svg";
import { EditableText } from "../../shared/helpers/EditableText";
import { NavbarItem } from "../../shared/helpers/NavbarItem";

type PropsType = {
  showForToday?: (s: string) => void;
};
export const NavbarList = (props: PropsType) => {
  const { showForToday } = props;
  const [showInput, setShowInput] = useState(false)
  let lists = useAppSelector(ListsSelector);
  const dispatch = useAppDispatch()
  const addListHandler = (newTitle:string) => {
    dispatch(addListTC(newTitle))
    setShowInput(false)
  }

  const editListHandler = () =>{}
  const deleteListHandler = (id:string) =>{
    dispatch(deleteListTC(id))
  }

  return (
    <>
      {lists
        .filter((el) => el.title !== "Inbox")
        .map((el) => (

            <NavbarItem id={el.id} title={el.title} editCallback={editListHandler}
                         deleteCallback={deleteListHandler} />

        ))}
        {showInput ? <div className={style.navbarItem}>
            {/*<input autoFocus={true} placeholder={"Title"} onChange={setTitleHandler} value={newTitle} onBlur={addListHandler} onKeyDown={keyDownHandler}></input>*/}
            <EditableText content={''} callback={addListHandler} mode={showInput} />
        </div>
          : <div className={`${style.navbarItem} ${style.addNavbarItem}`} onClick={() => setShowInput(true)}>
          <i>+ Add new project</i>
        </div>}
    </>
  );
};

