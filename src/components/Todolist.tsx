import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import style from "./Todolist.module.css";

import { addTaskTC, editTaskTC, getTasksTC } from "../reducers/TasksReducer";
import { RootState } from "../redux/store";

type PropsType = {
  id: string;
  filter: string;
};
export const Todolist = (props: PropsType) => {
  const { id, filter } = props;

  let tasks = useAppSelector((state: RootState) => state.tasks[id]);

  let taskSorted = [...tasks];

  taskSorted.sort((a, b) => b.order - a.order);

  let dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTasksTC(id));
  }, [dispatch, id]);

  const date = new Date();
  const today = date.toISOString().slice(0, 10);
  if (filter) taskSorted = taskSorted.filter((el) => el.startDate && el.startDate.toString().slice(0, 10) === today);
  const addTask = () => {
    dispatch(addTaskTC(id, "newtask"));
  };
  const editTaskHandler = (taskId: string) => {
    dispatch(editTaskTC(id, taskId, { title: "newtask", deadline: new Date() }));
  };
  return (
    <div className={style.listWrapper}>
      {taskSorted.map((el) => (
        <div key={el.id} className={style.item}>
          <div>
            <input type="checkbox" className={style.roundCheckbox} />
          </div>
          <div onClick={() => editTaskHandler(el.id)}> {el.title}</div>
        </div>
      ))}
      <div className={`${style.item} ${style.addItem}`} onClick={addTask}>
        <div className={style.addIco}>+</div>{" "}
        <div>
          <i> Add new task</i>
        </div>
      </div>
    </div>
  );
};
