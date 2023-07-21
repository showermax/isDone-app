import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/hooks";
import style from "./Todolist.module.css";

import { addTaskTC, getTasksTC, ModelType } from "../task/TasksReducer";
import { Task } from "../task/Task";
import { AddForm } from "../../features/addForm";
import { TasksSelector } from "../../app/Selectors";

type PropsType = {
  id: string;
  filter: string;
};
export const Todolist = (props: PropsType) => {
  const { id, filter } = props;

  let tasks = useAppSelector(TasksSelector);

  let taskSorted = [...tasks[id]];

  taskSorted.sort((a, b) => b.order - a.order);

  let dispatch = useAppDispatch();
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    dispatch(getTasksTC(id));
  }, [dispatch, id]);

  const date = new Date();
  const today = date.toISOString().slice(0, 10);
  if (filter==='Today') taskSorted = taskSorted.filter((el) => el.deadline && el.deadline.toString().slice(0, 10) === today);
  const addTask = (newTask: ModelType & { todoLisId: string }) => {
    dispatch(addTaskTC(id, newTask));
    setShowAddForm(false);
  };

  return (
    <div className={style.listWrapper}>
      {taskSorted.map((el) => (
        <Task task={el} key={el.id} />
      ))}
      {!showAddForm ? <div className={`${style.item} ${style.addItem}`} onClick={()=>setShowAddForm(true)}>
          <div className={style.addItemWrapper}>
            <div className={style.addIco}>+</div>
            <div><i> Add new task </i></div>
          </div>
        </div>
        :
        <div>
          <AddForm todoLisId={id} task={{
            description: '',
            title: '',
            completed: false,
            status: 0,
            priority: 1,
            startDate: null,
            deadline: null,
            id: '',
            todoListId: '',
            order: 0,
            addedDate: null,
          }} showMe={setShowAddForm} saveTask={addTask} />
        </div>
      }


    </div>
  );
};
