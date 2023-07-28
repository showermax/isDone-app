import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "../../pages/Navbar.module.css";
import { EditableText } from "./EditableText";
import dotsIco from "../../assets/icons/dots.svg";
import editIco from "../../assets/icons/edit.svg";
import deleteIco from "../../assets/icons/delete.svg";
type PropsType ={
  id:string,
  title:string,
  editCallback:(s:string, newTitle:string)=>void,
  deleteCallback:(s:string)=>void
}
export const NavbarItem = ({id,title,editCallback,deleteCallback}:PropsType) => {
  const [newTitle, setNewTitle] = useState( '')
  const [showSubmenu, setShowSubmenu] = useState([false,''])
  const showSubmenuHandler = (id:string) =>{
    setShowSubmenu([!showSubmenu[0],id])
  }
  const editListHandler=()=>{
    editCallback(id,newTitle)
  }
  const deleteListHandler=()=>{
    deleteCallback(id)
  }
  return (
    <div>
      <NavLink key={id} to={title}>
        <div className={style.navbarItem}>
          <EditableText content={title} callback={setNewTitle} mode={false} />
          <img className={style.threeDots} src={dotsIco} alt="delete or edit the project" onClick={()=> {showSubmenuHandler(id)}
          }/>
          {showSubmenu[0] && showSubmenu[1]===id && <div className={style.subMenu}>
            <img className={style.item_right_ico} src={editIco} alt={"edit task"} onClick={editListHandler} />
            <img className={style.item_right_ico} src={deleteIco} alt={"delete task"} onClick={deleteListHandler} />
          </div>}
        </div>
      </NavLink>
    </div>
  );
};

