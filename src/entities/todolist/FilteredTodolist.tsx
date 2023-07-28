import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/hooks";
import style from "./Todolist.module.css";

import { addTaskTC, getAllTasksTC, getTasksTC, ModelType } from "../task/TasksReducer";
import { Task } from "../task/Task";
import { AddForm } from "../../features/addForm";
import { ListsIdsSelector, ListsSelector, TasksSelector } from "../../app/Selectors";
import { useOutsideClick } from "../../shared/hooks/useOutsideClick";
import { getListsTC, ListReducer } from "./ListReducer";

type PropsType = {
  filter: string;
};
export const FilteredTodolist = (props: PropsType) => {
  const { filter } = props;

  let tasks = useAppSelector(TasksSelector);


  let taskSorted = [...tasks['all']];

  taskSorted.sort((a, b) => b.order - a.order);

  let dispatch = useAppDispatch();
  const [showAddForm, setShowAddForm] = useState(false);
  console.log('rendered');
  useEffect(() => {
    dispatch(getAllTasksTC());
  }, [dispatch]);
  console.log(tasks);
  const date = new Date();
  const today = date.toISOString().slice(0, 10);
  if (filter==='Today') taskSorted = taskSorted.filter((el) => el.deadline && el.deadline.toString().slice(0, 10) === today);
  const addTask = (newTask: ModelType & { todoLisId: string }) => {
    // dispatch(addTaskTC(id, newTask));
    // setShowAddForm(false);
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
          <AddForm todoLisId={'all'} task={{
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
