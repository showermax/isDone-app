import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/hooks";
import style from "./Todolist.module.css";

import { getAllTasksTC } from "../task/TasksReducer";
import { Priority, Task } from "../task/Task";
import { TasksSelector } from "../../app/Selectors";
import { Select } from "../../shared/helpers/Select";
import { PriorityType } from "../../features/addForm";

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

  const [project, setProject] = useState<string>('');
  const [priority, setPriority] = useState<PriorityType | null>(null);

  const date = new Date();
  const today = date.toISOString().slice(0, 10);
  if (filter === "Today") taskSorted = taskSorted.filter((el) => el.deadline && el.deadline.toString().slice(0, 10) === today);
  if (project) taskSorted = taskSorted.filter(el => el.todoListId === project);
  if (priority) taskSorted = taskSorted.filter(el => el.priority === Priority[priority]);
  const selectHandler1 = (s: string) => {
    setProject(s);
  };
  const selectHandler2 = (s: PriorityType) => {
    setPriority(s);
  };

  return (
    <>
      <Select todoLisId={"all"} whatToSelect={"priority"} onChangeProp2={selectHandler2} />
      <Select todoLisId={"all"} whatToSelect={"projects"} onChangeProp1={selectHandler1} />
      <div className={style.listWrapper}>
        {taskSorted.map((el) => (
          <Task task={el} key={el.id} />
        ))}
      </div>
    </>

  );
};
