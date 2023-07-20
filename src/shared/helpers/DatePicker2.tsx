import { forwardRef } from "react";
import style from '../../features/addForm.module.css'


// @ts-ignore
export const CustomInput = forwardRef<any>(({ value, onClick}, ref) => {
  console.log(value)
  return (
    <button className={style.customButton} onClick={onClick} ref={ref}>
      {value === new Date() ? "Today" : value}
    </button>
  )
  })
