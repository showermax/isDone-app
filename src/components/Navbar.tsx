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
        <>
            <div className={style.navbarGroup}>
                <NavLink to={'Inbox'}><div className={style.navbarItem} onClick={() => showForToday('')}>Inbox</div></NavLink>

                <NavLink to={'Inbox'}><div className={style.navbarItem} onClick={() => showForToday('Today')}>Today</div></NavLink>
            </div>
            <div className={style.navbarGroup}>
                {lists.filter(el=>el.name !== 'Inbox').map(el=><NavLink to={el.name}><div className={style.navbarItem} onClick={()=>showForToday('')}>{el.name}</div></NavLink>)}
            </div>

        </>
    );
};

