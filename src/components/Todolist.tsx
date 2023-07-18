import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import style from "./Todolist.module.css";

import { getTasksTC } from "../reducers/TasksReducer";
import { RootState } from "../redux/store";

type PropsType = {
  id: string;
  filter: string;
};
export const Todolist = (props: PropsType) => {
  const { id, filter } = props;
  let tasks = useAppSelector((state: RootState) => state.tasks[id]);
  console.log(tasks);
  let dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTasksTC(id));
  }, [dispatch, id]);

  // const date = new Date();
  //     const today= date.toLocaleDateString('en-US').split('/').map(el=>el.length<2 ? '0'+el:el)
  // today.shift('today[2]')
  // [today[0], today[2]]=[today[2],today[0]]

  // let tasksToRender = tasks.filter((el) => el.projectId === id);
  // if (filter) tasksToRender = tasks.filter(el=>el.due.date===today)

  return (
    <div className={style.listWrapper}>
      <button onClick={() => {}}>add new task</button>
      {tasks.map((el) => (
        <div key={el.id} className={style.item}>
          <div>
            <input type="checkbox" className={style.roundCheckbox} />
          </div>
          {el.title}
        </div>
      ))}
    </div>
  );
};
