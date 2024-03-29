import React, { useState } from "react";
import style from "../../pages/Navbar.module.css";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/hooks";
import { ListsSelector } from "../../app/Selectors";
import { addListTC, deleteListTC } from "../../entities/todolist/ListReducer";
import { EditableText } from "../../shared/helpers/EditableText";
import { NavbarItem } from "./NavbarItem";
import { useNavigate } from "react-router-dom";

export const NavbarList = () => {
  const [showInput, setShowInput] = useState(false)
  let lists = useAppSelector(ListsSelector);
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const addListHandler = (newTitle:string) => {
    dispatch(addListTC(newTitle))
    setShowInput(false)
    navigate(newTitle)
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

            <NavbarItem key={el.id} id={el.id} title={el.title} editCallback={editListHandler}
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

