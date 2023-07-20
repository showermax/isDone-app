import { combineReducers } from "redux";
import { ListReducer } from "../entities/todolist/ListReducer";
import { TasksReducer } from "../entities/task/TasksReducer";
import { configureStore } from "@reduxjs/toolkit";
//
const Reducers = combineReducers({
  lists: ListReducer,
  tasks: TasksReducer,
});
//
// export const store = createStore(Reducers, applyMiddleware(thunk));
//
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
// export type RootReducerType = ReturnType<typeof Reducers>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

export const store = configureStore({
  reducer: Reducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
