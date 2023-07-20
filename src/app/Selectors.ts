import { RootState } from "./store";

export const ListsSelector = (state: RootState) => state.lists;
export const TasksSelector = (state: RootState) => state.tasks;
