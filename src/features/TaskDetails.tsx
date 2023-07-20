import React, { FC } from "react";
import style from './TaskDetails.module.css'
import { TaskType } from "../entities/task/TasksReducer";
type PropsType = {
  task: TaskType;
}
export const TaskDetails: FC<PropsType> = ({task}) => {
  let priority = 'not set'
  switch (task.priority) {
    case 1 : priority = 'Low'
      break
    case 2 : priority = 'Middle'
      break
    case 3 : priority ='High'
      break
    case 4 : priority ='Urgently'
      break
    case 5 : priority = 'Later'
      break
  }
  return (
    <div className={style.wrapper}>
      <div className={style.item}><div><i> Description: </i></div>
        <div>{task.description}</div>
      </div>
      <div className={style.item}><div>Deadline:</div>
        <div>{task.deadline ? task.deadline.toString() : "No date set"}</div>
      </div>
      <div className={style.item}><div>Priority:</div>
        <div>{priority}</div>
      </div>
      <div className={style.item}><div>Status:</div>
        <div>{task.status}</div>
      </div>
      <div className={style.item}><div>Created:</div>
        <div>{task.addedDate ? task.addedDate.toString(): ''}</div>
      </div>
    </div>
  );
};

