import React, { FC } from "react";
import style from './TaskDetails.module.css'
type PropsType = {
  description: string,
  deadline: Date | null
}
export const TaskDetails: FC<PropsType> = ({ description, deadline }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.item}><div>Description:</div>
        <div>{description}</div>
      </div>
      <div className={style.item}><div>Deadline:</div>
        <div>{deadline ? deadline.toString() : "No date set"}</div>
      </div>
    </div>
  );
};

