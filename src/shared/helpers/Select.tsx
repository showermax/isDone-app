import React, { ChangeEvent, FC, useState } from "react";
import style from "../../features/addForm.module.css";
import { useAppSelector } from "../hooks/hooks";

type OptionsType = {
  id?: string,
  title: string
}
export const Select:FC<{todoLisId: string,
  whatToSelect: string,
  onChangeProp1?: (str:string)=>void,
  onChangeProp2?: (str:any)=>void}> = ({todoLisId, whatToSelect, onChangeProp1, onChangeProp2}) => {
  const projects = useAppSelector(s=>s.lists)
  const priorities = [{title: 'Low'}, {title: 'Middle'}, {title: 'High'}, {title: 'Urgently'}, {title: 'Later'}]
  const options: OptionsType[] = whatToSelect === 'projects' ? projects : priorities
  const value = projects[projects.findIndex(el=>el.id===todoLisId)].title
  const [currentValue, setCurrentValue] = useState(value)
  const selectHandler =(e:ChangeEvent<HTMLSelectElement>)=>{
    if (onChangeProp1) onChangeProp1(e.currentTarget.value)
    if (onChangeProp2) onChangeProp2(e.currentTarget.value)
    setCurrentValue(e.currentTarget.value)
  }

  return (
    <select className={`${style.customButton} ${style.select}`} onChange={selectHandler}>
      {options.map(el=><option value={ el.id ? el.id : el.title} selected={el.id===todoLisId}>{el.title}</option>)}
    </select>
  );
};

