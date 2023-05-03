import React from 'react';
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../hooks/hooks";
import {ListsSelector} from "../reducers/Selectors";
import style from './Navbar.module.css'
type PropsType = {
    showForToday: (s:string)=> void
}
export const Navbar = (props:PropsType) => {
    const {showForToday} = props
    let lists = useAppSelector(ListsSelector)
    return (
        <div>
            <div className={style.namvbarItem} onClick={()=>showForToday('')}><NavLink to={'Inbox'}>Inbox</NavLink></div>
            <div className={style.namvbarItem} onClick={()=>showForToday('Today')}>Today</div>
            {lists.filter(el=>el.name !== 'Inbox').map(el=><div className={style.namvbarItem} onClick={()=>showForToday('')}><NavLink to={el.name}>{el.name}</NavLink></div>)}
        </div>
    );
};

