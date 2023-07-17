import React, {useEffect, useState} from 'react';
import style from './MainContent.module.css'
import {Todolist} from "./Todolist";
import {Routes, Route} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {ListsSelector} from "../reducers/Selectors";
import {Navbar} from "./Navbar";
import {api} from "../api/api";
import {getListsTC} from "../reducers/ListReducer";
import {useWindowSize} from "../hooks/useWindowSize";

export const MainContent = (props: {showNavbar:boolean}) => {
    let  windowSize=useWindowSize()
    const [filter, setFilter] = useState('')
    let lists = useAppSelector(ListsSelector)
    const dispatch = useAppDispatch()
    // if (windowSize<600) setShowNavbar(true)
    useEffect(() => {
        dispatch(getListsTC())
    }, [])
    const showForToday = (s: string) => {
        setFilter(s)
    }

    return (
        <div className={style.wrapper}>
            {
                props.showNavbar
                && <div className={style.navbar}><Navbar showForToday={showForToday}/></div>
            }

            <div className={style.list}>
                <Routes>
                    {lists.map(el => <Route path={`/${el.name}`} element={<Todolist id={el.id} filter={filter}/>}/>)}
                </Routes></div>

        </div>
    );
};

