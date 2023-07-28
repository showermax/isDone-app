import React, { useEffect } from "react";
import style from "./MainContent.module.css";
import { Todolist } from "../entities/todolist/Todolist";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../shared/hooks/hooks";
import { ListsSelector } from "../app/Selectors";
import { Navbar } from "./Navbar";

import { getListsTC } from "../entities/todolist/ListReducer";
import { FilteredTodolist } from "../entities/todolist/FilteredTodolist";

export const MainContent = (props: { showNavbar: boolean }) => {

  let lists = useAppSelector(ListsSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getListsTC());
  }, [dispatch]);


  return (
    <div className={style.wrapper}>
      {props.showNavbar && (
        <div className={style.navbar}>
          <Navbar />
        </div>
      )}
      <div className={style.list}>
        <Routes>
          {lists.map((el) => (
            <Route key = {el.id} path={`/${el.title}`} element={<Todolist key={el.id} id={el.id} />} />
          ))}
          <Route path={'/'} element = {<Navigate to = {'Inbox'}/>} />
          <Route path={'Today'} element = {<FilteredTodolist filter={'Today'} />} />
          <Route path={'Filters'} element = {<FilteredTodolist filter={''} />} />
        </Routes>
      </div>
    </div>
  );
};
