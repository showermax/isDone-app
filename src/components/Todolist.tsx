import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import style from "./Todolist.module.css";

import { addTaskTC, getTasksTC, ModelType } from "../reducers/TasksReducer";
import { RootState } from "../redux/store";
import { Task } from "./Task";
import { AddForm } from "../helpers/addForm";

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
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    dispatch(getTasksTC(id));
  }, [dispatch, id]);

  const date = new Date();
  const today = date.toISOString().slice(0, 10);
  if (filter) taskSorted = taskSorted.filter((el) => el.deadline && el.deadline.toString().slice(0, 10) === today);
  const addTask = (newTask: ModelType & { todoLisId: string }) => {
    dispatch(addTaskTC(id, newTask.title));
    setShowAddForm(true);
  };

  return (
    <div className={style.listWrapper}>
      {taskSorted.map((el) => (
        <Task task={el} key={el.id} />
      ))}
      {!showAddForm ? <div className={`${style.item} ${style.addItem}`}>
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
