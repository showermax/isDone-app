import React, { FC } from "react";
import style from "./addForm.module.css";
import { useAppSelector } from "../hooks/hooks";

export const Select:FC<{todoLisId: string, whatToSelect: string}> = ({todoLisId, whatToSelect}) => {
  const projects = useAppSelector(s=>s.lists)
  const priorities = [{title: 'Low'}, {title: 'Middle'}, {title: 'High'}, {title: 'Urgently'}, {title: 'Later'}]
  const options = whatToSelect === 'projects' ? projects : priorities
  const value = projects[projects.findIndex(el=>el.id===todoLisId)].title
  return (
    <select className={style.customButton} value={value}>
      {options.map(el=><option>{el.title}</option>)}
    </select>
  );
};

