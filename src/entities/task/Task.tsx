import React, { FC, useState } from "react";
import style from "../todolist/Todolist.module.css";
import calendarIco from "../../assets/icons/calendar.svg";
import editIco from "../../assets/icons/edit.svg";
import deleteIco from "../../assets/icons/delete.svg";
import { deleteTaskTC, editTaskTC, ModelType, TaskType } from "./TasksReducer";
import { useAppDispatch } from "../../shared/hooks/hooks";
import { AddForm } from "../../features/addForm";
import { TaskDetails } from "../../features/TaskDetails";
import { useOutsideClick } from "../../shared/hooks/useOutsideClick";

export const Priority = {
  Low: 1,
  Middle: 2,
  High: 3,
  Urgently: 4,
  Later: 5
} as const;

type PropsType = {
  task: TaskType;
};
export const Task: FC<PropsType> = ({ task }) => {
  let dispatch = useAppDispatch();
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const deadlineTodayHandler = (e:React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    dispatch(editTaskTC(task.todoListId, task.id, {title: task.title, deadline: new Date()}));
  };
  const deleteTaskHandler =(e:React.MouseEvent<HTMLElement>)=>{
    e.stopPropagation()
    dispatch(deleteTaskTC(task.todoListId, task.id))
  }
  const editTaskHandler = (e:React.MouseEvent<HTMLElement>) =>{
    e.stopPropagation()
    setShowAddForm(true)
  }
  const editTask = (newTask: ModelType & { todoLisId: string }) => {
    dispatch(editTaskTC(task.todoListId, task.id, {title: newTask.title, description: newTask.description, deadline: newTask.deadline, priority: newTask.priority}))
  }
  const showDetailsHandler = () => {
    setShowDetails(!showDetails)
  }
  const handleClickOutside = () => {
    setShowAddForm(false);
  };

  const ref = useOutsideClick(handleClickOutside)

  return (
    <>
      { !showAddForm ?
      <div key={task.id} className={style.item} onClick={showDetailsHandler}>
        <div className={style.item_left}>
          <div>
            <input type="checkbox" className={style.roundCheckbox} />
          </div>
          <div style={{border:'2px'}}> {task.title}</div>
        </div>
        <div className={style.item_right}>
          <img className={style.item_right_ico} src={editIco} alt={"edit task"} onClick={editTaskHandler} />
          <img className={style.item_right_ico} src={calendarIco} alt={"set deadline"} onClick={deadlineTodayHandler} />
          <img className={style.item_right_ico} src={deleteIco} alt={"delete task"} onClick={deleteTaskHandler} />
        </div>
      </div>
        :
        <div ref={ref}>
          <AddForm todoLisId={task.todoListId} task={task} showMe={setShowAddForm} saveTask={editTask} hide={true}/>
        </div>
      }
      {showDetails && !showAddForm && <div><TaskDetails task={task} /> </div> }
    </>
  );
};




