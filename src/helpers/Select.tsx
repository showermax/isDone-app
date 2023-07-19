import React, { ChangeEvent, FC, useState } from "react";
import style from "./addForm.module.css";
import { useAppSelector } from "../hooks/hooks";

type OptionsType = {
  id?: string,
  title: string
}
export const Select:FC<{todoLisId: string, whatToSelect: string, onChangeProp: (s:string)=>void}> = ({todoLisId, whatToSelect, onChangeProp}) => {
  const projects = useAppSelector(s=>s.lists)
  const priorities = [{title: 'Low'}, {title: 'Middle'}, {title: 'High'}, {title: 'Urgently'}, {title: 'Later'}]
  const options: OptionsType[] = whatToSelect === 'projects' ? projects : priorities
  const value = projects[projects.findIndex(el=>el.id===todoLisId)].title
  const [currentValue, setCurrentValue] = useState(value)
  const selectHandler =(e:ChangeEvent<HTMLSelectElement>)=>{
    onChangeProp(e.currentTarget.value)
    setCurrentValue(e.currentTarget.value)
  }
  return (
    <select className={style.customButton} value={currentValue} onChange={selectHandler}>
      {options.map(el=><option value={ el.id ? el.id : el.title}>{el.title}</option>)}
    </select>
  );
};

