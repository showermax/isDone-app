import React from 'react';
import style from './MainContent.module.css'
import {Todolist} from "./Todolist";
import {Routes,Route} from "react-router-dom";
import {useAppSelector} from "../hooks/hooks";
import {ListsSelector} from "../reducers/Selectors";

export const MainContent = () => {
    const date = new Date()
    const today = date.toLocaleDateString('en-US').split('/').reverse().map(el=>el.length<2 ? '0'+el:el).join('-')
    let lists = useAppSelector(ListsSelector)
    // const today = date.getFullYear() + '-' +
    //     `${date.getMonth().toString().length > 1 ? date.getMonth().toString() : '0'+date.getMonth().toString()}` + '-' +
    //     `${date.getDate().toString().length > 1 ? date.getDate().toString() : '0'+date.getDate().toString()}`
    console.log(today)
    console.log(date.toLocaleDateString('en-US'))
    return (
        <div className={style.wrapper}>
            <div className={style.sidebar}>Navbar</div>
           <Routes>
               {lists.map(el=><Route path={`/${el.name}`} element={<Todolist id={el.id} filter={''}/>} /> )}
           </Routes>

        </div>
    );
};

