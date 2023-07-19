import React, { ChangeEvent, FC, useState } from "react";
import style from './addForm.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CustomInput } from "./DatePicker2";
import { Select } from "./Select";
import { ModelType, TaskType } from "../reducers/TasksReducer";

export const AddForm:FC<{todoLisId:string, task: TaskType}> = ({todoLisId, task}) => {
  const [newTask, setNewTask] = useState<ModelType & {todoLisId:string}>({
    description: task.description,
    title: task.title,
    status: task.status,
    priority: task.priority,
    startDate: task.startDate,
    deadline:task.deadline,
    todoLisId
  })
  const [startDate, setStartDate] = useState<Date | null>(new Date() );
  const [title, setTitle] = useState('' );
  const [description, setDescription] = useState('' );
  const setTitleHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
    setNewTask({...newTask, title: e.currentTarget.value})
  }
  const setDescriptionHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
    setNewTask({...newTask, description: e.currentTarget.value})
  }
  const setProjectHandler = (s:string) => {
    setNewTask({...newTask, todoLisId:s})
  }
  const setDateHandler = (date:Date) =>{
    setNewTask({...newTask, deadline:date})
  }

  return (
    <div className={style.addForm}>
      <textarea rows={2} autoFocus={true} placeholder={'Title'} onChange={setTitleHandler} value={title}></textarea>
      <textarea rows={5} placeholder={'Description'} onChange={setDescriptionHandler} value={description}></textarea>
      <div className={style.addForm_footer}>
        <div className={style.addForm_footer_left}>
          <div className={style.addForm_footer_item}>
            <i>Select a project</i>
            <Select todoLisId={todoLisId} whatToSelect={"projects"} onChangeProp={setProjectHandler}/>
          </div>
          <div className={style.addForm_footer_item}>
            <i>Set due date</i>
            <DatePicker selected={startDate} filterDate={(date) => new Date() <= date}
                        onChange={setDateHandler} customInput={<CustomInput />} />
          </div>
          <div className={style.addForm_footer_item}>
            <i>Set Priority</i>
            <Select todoLisId={todoLisId} whatToSelect={"priorities"} onChangeProp={()=>{}}/>
          </div>
        </div>
        <div className={style.addForm_footer_right}>
          <div className={`${style.customButton} ${style.saveCancelButton}`}>Cancel</div>
          <div className={`${style.customButton} ${style.saveCancelButton} ${style.saveCancelButton_backGround}`}>Save</div>
        </div>
      </div>
    </div>
  );
};

