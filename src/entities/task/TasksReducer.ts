import { Dispatch } from "redux";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todoListsApi } from "../../shared/api/apiSamurais";
import { addList, setLists } from "../todolist/ListReducer";

export type TasksType = {
  [key: string]: TaskType[];
};

export type TaskType = {
  description: string;
  title: string;
  completed: boolean;
  status: number;
  priority: number;
  startDate: Date | null;
  deadline: Date | null;
  id: string;
  todoListId: string;
  order: number;
  addedDate: Date | null;
};
export type ModelType = {
  description?: string;
  title?: string;
  completed?: boolean;
  status?: number;
  priority?: number;
  startDate?: Date | null;
  deadline?: Date | null;
};

let initialState: TasksType = {
  'all':[]
};

const slice = createSlice({
  name: "TasksReducer",
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<{ tasks: TaskType[]; todoListId: string }>) {
      state[action.payload.todoListId] = action.payload.tasks;
    },
    setAllTasks(state,action: PayloadAction<{tasks: TaskType[]}>){
      state['all']=action.payload.tasks
    },
    addTask(state, action: PayloadAction<{ todoListId: string; newTask: TaskType }>) {
      state[action.payload.todoListId].push(action.payload.newTask);
    },
    editTask(state, action: PayloadAction<{ todoListId: string; taskId: string; task: TaskType }>) {
      return {
        ...state,
        [action.payload.task.todoListId]: state[action.payload.task.todoListId].map((el) =>
          el.id === action.payload.task.id ? action.payload.task : el,
        ),
      };
    },
    deleteTask (state,action: PayloadAction<{todoListId: string, taskId: string}>) {
      let index = state[action.payload.todoListId].findIndex((t) => t.id === action.payload.taskId)
      if (index!==-1) state[action.payload.todoListId].splice(index, 1)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(setLists, (state, action) => {
      action.payload.lists.forEach((el) => (state[el.id] = []));
    })
      .addCase(addList,(state, action)=>{
        return {...state, [action.payload.list.id]:[]}
      });
  },
});
export const TasksReducer = slice.reducer;
export const { setTasks, setAllTasks, addTask, editTask, deleteTask } = slice.actions;

export const getTasksTC = (todoListId: string) => async (dispatch: Dispatch) => {
  try {
    let tasks = await todoListsApi.getTasks(todoListId);
    dispatch(setTasks({ tasks: tasks.data.items, todoListId }));
  } catch (e) {}
};

export const getAllTasksTC = createAsyncThunk('TasksReducer/getallTasks', async (arg,ThunkAPI)=>{

  const {dispatch} = ThunkAPI
  let allTasks:TaskType[] = []
  try {
    let allLists = await todoListsApi.getLists()
    let allListsIds = allLists.data.map(el=>el.id)
    for (let i = 1; i < allListsIds.length; i++) {
      const result = await todoListsApi.getTasks(allListsIds[i])
      allTasks = [...allTasks, ...result.data.items]
    }
    dispatch(setAllTasks({tasks: allTasks}))

  } catch (e) {

  }
})
export const addTaskTC = (todoListId: string, newtask: ModelType) => async (dispatch: Dispatch) => {
  try {
    let task = await todoListsApi.addTask(todoListId, newtask);
    dispatch(addTask({ todoListId, newTask: task.data.data.item }));
  } catch (e) {}
};
export const editTaskTC =
  (todoListId: string, taskId: string, changedProperties: ModelType) => async (dispatch: Dispatch) => {
    try {
      let result = await todoListsApi.editTask(todoListId, taskId, changedProperties);
      dispatch(editTask({ todoListId, taskId, task: result.data.data.item }));
    } catch (e) {}
  };

export const deleteTaskTC = (todoListId: string, taskId: string) => async (dispatch: Dispatch) => {
  try{
    const res = await todoListsApi.deleteTask(todoListId,taskId)

    dispatch(deleteTask({todoListId,taskId}))
  } catch (e) {

  }
}
