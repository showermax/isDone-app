import React from 'react';
import {useAppSelector} from "../hooks/hooks";
import style from "./Todolist.module.css"
import {ListsSelector, TasksSelector} from "../reducers/Selectors";

type PropsType ={
    id:string
    filter:string
}
export const Todolist = (props:PropsType) => {
    const {id, filter} = props
    const date = new Date()
    const today = date.toLocaleDateString('en-US').split('/').reverse().map(el=>el.length<2 ? '0'+el:el).join('-')
    console.log(today)
    let tasks = useAppSelector(TasksSelector)
    let tasksToRender = tasks.filter(el=>el.projectId===id)
    if (filter) tasksToRender = tasks.filter(el=>el.due.date===today)
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

