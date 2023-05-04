import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import style from "./Todolist.module.css"
import {TasksSelector} from "../reducers/Selectors";

import {getTasksTC} from "../reducers/TasksReducer";

type PropsType ={
    id:string
    filter:string
}
export const Todolist = (props:PropsType) => {
    let tasks = useAppSelector(TasksSelector)
    let dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getTasksTC())
    }, [])
    const {id, filter} = props
    const date = new Date()
    const today = date.toLocaleDateString('en-US').split('/').reverse().map(el=>el.length<2 ? '0'+el:el).join('-')
    console.log(today)

    let tasksToRender = tasks.filter(el=>el.projectId===id)
    // if (filter) tasksToRender = tasks.filter(el=>el.due.date===today)
    return (
        <div className={style.listWrapper}>
            {tasksToRender.map(el=>
                <div key={el.id} className={style.item}>
                    <input type={'checkbox'} checked={false} />
                    {el.content}
                </div>)}
        </div>
    );
};

