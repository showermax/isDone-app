import React from 'react';
import style from './MainContent.module.css'
import {Todolist} from "./Todolist";
import {Routes,Route} from "react-router-dom";

export const MainContent = () => {
    const inboxId='0'
    const project1Id = '1'
    const project2Id = '2'
    const date = new Date()
    const today = date.toLocaleDateString('en-US').split('/').reverse().map(el=>el.length<2 ? '0'+el:el).join('-')

    // const today = date.getFullYear() + '-' +
    //     `${date.getMonth().toString().length > 1 ? date.getMonth().toString() : '0'+date.getMonth().toString()}` + '-' +
    //     `${date.getDate().toString().length > 1 ? date.getDate().toString() : '0'+date.getDate().toString()}`
    console.log(today)
    console.log(date.toLocaleDateString('en-US'))
    return (
        <div className={style.wrapper}>
            <div className={style.sidebar}>Navbar</div>
           <Routes>
               <Route path={'/inbox'} element={<Todolist id={inboxId} filter={''}/>} />
               <Route path={'/inbox'} element={<Todolist id={inboxId} filter={today}/>} />
               <Route path={'/inbox'} element={<Todolist id={project1Id} filter={'all'}/>} />
               <Route path={'/inbox'} element={<Todolist id={project2Id} filter={'all'}/>} />
           </Routes>

        </div>
    );
};

