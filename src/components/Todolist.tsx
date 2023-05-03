import React from 'react';
import {useAppSelector} from "../hooks/hooks";
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
    let tasksTorender = tasks.filter(el=>el.projectId===id)
    if (filter) tasksTorender = tasks.filter(el=>el.due.date===today)
    return (
        <div>
            {tasksTorender.map(el=><div>{el.content}</div>)}
        </div>
    );
};

