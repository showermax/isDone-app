import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import style from "./Todolist.module.css";

import { addTaskTC, getTasksTC } from "../reducers/TasksReducer";
import { RootState } from "../redux/store";

type PropsType = {
  id: string;
  filter: string;
};
export const Todolist = (props: PropsType) => {
  const { id, filter } = props;
  let tasks = useAppSelector((state: RootState) => state.tasks[id]);
  // if (tasks.length > 0) tasks.sort((a, b) => (a.order > b.order ? 1 : -1));
  let taskSorted = [...tasks];
  taskSorted.sort((a, b) => b.order - a.order);
  let dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTasksTC(id));
  }, [dispatch, id]);

  const date = new Date();
  const today = date.toISOString().slice(0, 10);
  if (filter) tasks = tasks.filter((el) => el.addedDate.toString().slice(0, 10) === today);
  const addTask = () => {
    dispatch(addTaskTC(id, "newtask", 1));
  };
  return (
    <div className={style.listWrapper}>
      {taskSorted.map((el) => (
        <div key={el.id} className={style.item}>
          <div>
            <input type="checkbox" className={style.roundCheckbox} />
          </div>
          {el.title}
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
