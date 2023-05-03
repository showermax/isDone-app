import React from 'react';
import {useAppSelector} from "../hooks/hooks";
import {ListsSelector, TasksSelector} from "../reducers/Selectors";

type PropsType ={
    id:string
    filter:string
}
export const Todolist = (props:PropsType) => {
    const {id, filter} = props
    const tasks = useAppSelector(TasksSelector).filter(el=>el.projectId===id)

    return (
        <div>
            {tasks.map(el=><div>{el.content}</div>)}
        </div>
    );
};

