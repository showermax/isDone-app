import React from "react";
import {AnyAction, combineReducers, legacy_createStore as createStore} from "redux";
import {ListReducer} from "../reducers/ListReducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TasksReducer} from "../reducers/TasksReducer";

const Reducers = combineReducers({
    lists: ListReducer,
    tasks: TasksReducer,
})

export const store = createStore(Reducers)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type RootReducerType = ReturnType<typeof Reducers>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
>