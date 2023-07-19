import React, { FC } from "react";
import style from "./Todolist.module.css";
import calendarIco from "../assets/icons/calendar.svg";
import editIco from "../assets/icons/edit.svg";
import { editTaskTC, TaskType } from "../reducers/TasksReducer";
import { useAppDispatch } from "../hooks/hooks";

type PropsType = {
  task: TaskType;
};
export const Task: FC<PropsType> = ({ task }) => {
  let dispatch = useAppDispatch();
  const deadlineTodayHandler = () => {
    dispatch(editTaskTC(task.todoListId, task.id, {deadline: new Date()}));
  };

  return (
    <div key={task.id} className={style.item}>
      <div className={style.item_left}>
        <div>
          <input type="checkbox" className={style.roundCheckbox} />
        </div>
        <div> {task.title}</div>
      </div>
      <div className={style.item_right}>
        <img className={style.item_right_ico} src={calendarIco} onClick={deadlineTodayHandler}/>
        <img className={style.item_right_ico} src={editIco} />
      </div>
    </div>
  );
};
