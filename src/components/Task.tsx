import React, { FC } from "react";
import style from "./Todolist.module.css";
import { editTaskTC, TaskType } from "../reducers/TasksReducer";
import { useAppDispatch } from "../hooks/hooks";

type PropsType = {
  task: TaskType;
};
export const Task: FC<PropsType> = ({ task }) => {
  let dispatch = useAppDispatch();
  const editTaskHandler = (taskId: string) => {
    dispatch(editTaskTC(task.todoListId, taskId, { title: "newtask", deadline: new Date() }));
  };
  return (
    <div key={task.id} className={style.item}>
      <div>
        <input type="checkbox" className={style.roundCheckbox} />
      </div>
      <div onClick={() => editTaskHandler(task.id)}> {task.title}</div>
    </div>
  );
};
