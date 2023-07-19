import React, { FC, useState } from "react";
import style from './addForm.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CustomInput } from "./DatePicker2";
import { Select } from "./Select";

export const AddForm:FC<{todoLisId:string}> = ({todoLisId}) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date() );
  return (
    <div className={style.addForm}>
      <textarea rows={5} autoFocus={true} ></textarea>
      <div className={style.addForm_footer}>
        <div className={style.addForm_footer_item}>
          <i>Select a project</i>
          <Select todoLisId={todoLisId} whatToSelect={'projects'}/>
        </div>
        <div className={style.addForm_footer_item}>
          <i>Set due date</i>
          <DatePicker selected={startDate} filterDate={(date) => new Date() <= date}
                       onChange={(date) => setStartDate(date)} customInput={<CustomInput />} />
        </div>
        <div className={style.addForm_footer_item}>
          <i>Set Priority</i>
          <Select todoLisId={todoLisId} whatToSelect={'priorities'}/>
        </div>
      </div>
    </div>
  );
};

