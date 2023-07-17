import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import style from "./Todolist.module.css"
import {TasksSelector} from "../reducers/Selectors";

import {addTaskTC, getTasksTC} from "../reducers/TasksReducer";

type PropsType ={
    id:string
    filter:string
}
export const Todolist = (props:PropsType) => {
    let tasks = useAppSelector(TasksSelector)
    let dispatch = useAppDispatch()
    // useEffect(() => {
    //     dispatch(getTasksTC())  // диспатч перенесен в listreducer
    // }, [])
    const {id, filter} = props
    const date = new Date()
//     const today= date.toLocaleDateString('en-US').split('/').map(el=>el.length<2 ? '0'+el:el)
// today.shift('today[2]')
    // [today[0], today[2]]=[today[2],today[0]]

    let tasksToRender = tasks.filter(el=>el.projectId===id)
    // if (filter) tasksToRender = tasks.filter(el=>el.due.date===today)

    return (
        <div className={style.listWrapper}>
            <button onClick={()=>dispatch(addTaskTC(id,'newTask'))}>add new task</button>
            {tasksToRender.map(el=>
                <div key={el.id} className={style.item}>
                    <div ><input type='checkbox' className={style.roundCheckbox}/></div>
                    {el.content}
                </div>)}

        </div>
    );
};

