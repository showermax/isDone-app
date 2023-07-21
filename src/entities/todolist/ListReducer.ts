import { AppDispatch } from "../../app/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todoListsApi } from "../../shared/api/apiSamurais";

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
    addList (state, action: PayloadAction<{list: ListType}>) {
      state.push( action.payload.list )
    }
  },
});

export const ListReducer = slice.reducer;
export const { setLists, addList } = slice.actions;

export const getListsTC = () => async (dispatch: AppDispatch) => {
  try {
    let lists = await todoListsApi.getLists();
    dispatch(setLists({ lists: lists.data }));
    // dispatch(getTasksTC());
  } catch (e) {}
};
export const addListTC = createAsyncThunk('ListReducer/addList', async (title:string, thunkAPI) =>{
  const {dispatch, rejectWithValue }=thunkAPI
  try{
    const result = await todoListsApi.addList(title)
    if (result.data.resultCode === 0) dispatch(addList({list: result.data.data.item}))
  }
  catch (e) {

  }
})
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
