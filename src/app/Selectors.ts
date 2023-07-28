import { RootState } from "./store";

export const ListsSelector = (state: RootState) => state.lists;
export const ListsIdsSelector = (state: RootState) => state.lists.map(el=>el.id);
export const TasksSelector = (state: RootState) => state.tasks;
