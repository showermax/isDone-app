import React, {useState} from 'react';
import style from './MainContent.module.css'
import {Todolist} from "./Todolist";
import {Routes,Route} from "react-router-dom";
import {useAppSelector} from "../hooks/hooks";
import {ListsSelector} from "../reducers/Selectors";
import {Navbar} from "./Navbar";

export const MainContent = () => {
    const [filter,setFilter] = useState('')
    let lists = useAppSelector(ListsSelector)
    const showForToday=(s:string)=>{
        setFilter(s)
    }
    return (
        <div className={style.wrapper}>
            <div className={style.sidebar}><Navbar showForToday={showForToday}/></div>
           <Routes>
               {lists.map(el=><Route path={`/${el.name}`} element={<Todolist id={el.id} filter={filter}/>} /> )}
           </Routes>

        </div>
    );
};

