import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/hooks";
import style from "./Todolist.module.css";

import { getAllTasksTC } from "../task/TasksReducer";
import { Task } from "../task/Task";
import { TasksSelector } from "../../app/Selectors";

type PropsType = {
  filter: string;
};
export const FilteredTodolist = (props: PropsType) => {
  const { filter } = props;

  let tasks = useAppSelector(TasksSelector);


  let taskSorted = [...tasks["all"]];

  taskSorted.sort((a, b) => b.order - a.order);

  let dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(getAllTasksTC());
  }, [dispatch]);

  const date = new Date();
  const today = date.toISOString().slice(0, 10);
  if (filter === "Today") taskSorted = taskSorted.filter((el) => el.deadline && el.deadline.toString().slice(0, 10) === today);


  return (
    <div className={style.listWrapper}>
      {taskSorted.map((el) => (
        <Task task={el} key={el.id} />
      ))}

    </div>
  );
};
