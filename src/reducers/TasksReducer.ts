import { Dispatch } from "redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todoListsApi } from "../api/apiSamurais";
import { setLists } from "./ListReducer";

export type TasksType = {
  [key: string]: TaskType[];
};

export type TaskType = {
  description: string;
  title: string;
  completed: boolean;
  status: number;
  priority: number;
  startDate: Date;
  deadline: Date;
  id: string;
  todoListId: string;
  order: number;
  addedDate: Date;
};
export type ModelType = {
  description?: string;
  title?: string;
  completed?: boolean;
  status?: number;
  priority?: number;
  startDate?: Date;
  deadline?: Date;
};

let initialState: TasksType = {};

const slice = createSlice({
  name: "TasksReducer",
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<{ tasks: TaskType[]; todoListId: string }>) {
      state[action.payload.todoListId] = action.payload.tasks;
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
    });
  },
});
export const TasksReducer = slice.reducer;
export const { setTasks, addTask, editTask, deleteTask } = slice.actions;

export const getTasksTC = (todoListId: string) => async (dispatch: Dispatch) => {
  try {
    let tasks = await todoListsApi.getTasks(todoListId);
    dispatch(setTasks({ tasks: tasks.data.items, todoListId }));
  } catch (e) {}
};

export const addTaskTC = (todoListId: string, title: string) => async (dispatch: Dispatch) => {
  try {
    let task = await todoListsApi.addTask(todoListId, title);
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
    await todoListsApi.deleteTask(todoListId,taskId)
    dispatch(deleteTask({todoListId,taskId}))
  } catch (e) {

  }
}
// export const TasksReducer = (state: TasksType = initialState, action: ActionsType) => {
//   switch (action.type) {
//     case "GET-TASKS":
//       return action.payload.tasks;
//     case "ADD-TASK":
//       return [action.payload.newTask, ...state];
//
//     default:
//       return state;
//   }
// };
// type ActionsType = ReturnType<typeof getTasksAC> | ReturnType<typeof addTaskAC>;
//
// const getTasksAC = (tasks: TaskType[]) => {
//   return {
//     type: "GET-TASKS",
//     payload: { tasks },
//   } as const;
// };
//
// const addTaskAC = (newTask: TaskType) => {
//   return {
//     type: "ADD-TASK",
//     payload: { newTask },
//   } as const;
// };
//
// export const getTasksTC = () => async (dispatch: Dispatch) => {
//   try {
//     let tasks = await apiTodoist.getTasks();
//     dispatch(getTasksAC(tasks));
//   } catch (e) {}
// };
//
// export const addTaskTC = (projectId: string, content: string) => async (dispatch: Dispatch) => {
//   try {
//     let newTask = await apiTodoist.addTask({ projectId, content });
//     dispatch(addTaskAC(newTask));
//   } catch (e) {
//     console.log(e);
//   }
// };
