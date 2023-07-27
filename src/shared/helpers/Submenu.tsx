import React from "react";
import style from "./Submenu.module.css";
import editIco from "../../assets/icons/edit.svg";

import deleteIco from "../../assets/icons/delete.svg";

export const Submenu = () => {
  const editListHandler = () =>{}
  const deleteListHandler = () =>{}
  return (
    <div className = {style.item}>
      <img className={style.item_right_ico} src={editIco} alt={"edit task"} onClick={editListHandler} />
      <img className={style.item_right_ico} src={deleteIco} alt={"delete task"} onClick={deleteListHandler} />
    </div>
  );
};

