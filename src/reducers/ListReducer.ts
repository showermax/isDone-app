import { AppDispatch } from "../redux/store";
import { apiTodoist } from "../api/apiTodoist";
import { getTasksTC } from "./TasksReducer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { listApi } from "../api/apiSamurais";

export type ListType = {
  id: string;
  addedDate: Date;
  order: number;
  title: string;
};

const initialState: ListType[] = [];

const slice = createSlice({
  name: "ListReducer",
  initialState,
  reducers: {
    setLists(state, action: PayloadAction<{ lists: ListType[] }>) {
      return action.payload.lists;
    },
  },
});

export const ListReducer = slice.reducer;
export const { setLists } = slice.actions;

export const getListsTC = () => async (dispatch: AppDispatch) => {
  try {
    let lists = await listApi.getLists();
    dispatch(setLists({ lists: lists.data }));
    dispatch(getTasksTC());
  } catch (e) {}
};

// export const ListReducer = (state: ListType[] = InitialState, action: any): ListType[] => {
//   switch (action.type) {
//     case "GET-LISTS":
//       return action.payload.lists;
//     default:
//       return state;
//   }
// };
//
// const getListsAC = (lists: ListType[]) => {
//   return {
//     type: "GET-LISTS",
//     payload: {
//       lists,
//     },
//   } as const;
// };
// export const getListsTC = () => async (dispatch: AppDispatch) => {
//   try {
//     let lists = await apiTodoist.getProjects();
//     dispatch(getListsAC(lists));
//     dispatch(getTasksTC());
//   } catch (e) {}
// };
