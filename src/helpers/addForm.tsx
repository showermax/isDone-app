import React, { ChangeEvent, FC, useState } from "react";
import style from "./addForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CustomInput } from "./DatePicker2";
import { Select } from "./Select";
import { ModelType, TaskType } from "../reducers/TasksReducer";


const Priority = {
  Low: 1,
  Middle: 2,
  High: 3,
  Urgently: 4,
  Later: 5
} as const;
export type PriorityType = "Low" | "Middle" | "High" | "Urgently" | "Later"
export const AddForm: FC<{ todoLisId: string, task: TaskType, showMe: (f: boolean)=>void, saveTask: (newTask:ModelType & { todoLisId: string }) =>void }> = ({ todoLisId, task, showMe, saveTask }) => {

  const [newTask, setNewTask] = useState<ModelType & { todoLisId: string }>({
    description: task.description,
    title: task.title,
    status: task.status,
    priority: task.priority,
    startDate: task.startDate,
    deadline: task.deadline,
    todoLisId
  });

  const setTitleHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTask({ ...newTask, title: e.currentTarget.value });
  };
  const setDescriptionHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTask({ ...newTask, description: e.currentTarget.value });
  };
  const setProjectHandler = (s: string) => {
    setNewTask({ ...newTask, todoLisId: s });
  };
  const setDateHandler = (date: Date) => {
    setNewTask({ ...newTask, deadline: date });
  };
  const setPriorityHandler = (priority: PriorityType) => {
    setNewTask({ ...newTask, priority: Priority[priority] });
  };
  const saveTaskHandler = () =>{
    showMe(false)
    setNewTask({description: '', title: '', status: 0, priority: 1, startDate: null, deadline: null,todoLisId})
    saveTask(newTask)
    console.log(newTask);
  }
  const cancelHandler = () =>{
    showMe(false)
    setNewTask({description: '', title: '', status: 0, priority: 1, startDate: null, deadline: null,todoLisId})
    console.log(newTask);
  }
  // }
  return (
    <div className={style.addForm}>
      <textarea rows={2} autoFocus={true} placeholder={"Title"} onChange={setTitleHandler} value={newTask.title}></textarea>
      <textarea rows={5} placeholder={"Description"} onChange={setDescriptionHandler} value={newTask.description}></textarea>
      <div className={style.addForm_footer}>
        <div className={style.addForm_footer_left}>
          <div className={style.addForm_footer_item}>
            <i>Select a project</i>
            <Select todoLisId={todoLisId} whatToSelect={"projects"} onChangeProp1={setProjectHandler} />
          </div>
          <div className={style.addForm_footer_item}>
            <i>Set due date</i>
            <DatePicker selected={newTask.deadline ? newTask.deadline : null}
                        value={newTask.deadline ? undefined :'No deadline'}
                        filterDate={(date) => new Date() <= date}
                        onChange={setDateHandler} customInput={<CustomInput />} />
          </div>
          <div className={style.addForm_footer_item}>
            <i>Set Priority</i>
            <Select todoLisId={todoLisId} whatToSelect={"priorities"} onChangeProp2={setPriorityHandler} />
          </div>
        </div>
        <div className={style.addForm_footer_right}>
          <div className={`${style.customButton} ${style.saveCancelButton}`} onClick={cancelHandler}>Cancel</div>
          <div className={`${style.customButton} ${style.saveCancelButton} ${style.saveCancelButton_backGround}`} onClick={saveTaskHandler}>Save
          </div>
        </div>
      </div>
    </div>
  );
};

