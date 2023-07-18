import { RootState } from "../redux/store";

export const ListsSelector = (state: RootState) => state.lists;
export const TasksSelector = (state: RootState) => state.tasks;
