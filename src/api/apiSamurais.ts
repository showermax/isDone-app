import axios, { AxiosResponse } from "axios";
import { ListType } from "../reducers/ListReducer";
import { ModelType, TaskType } from "../reducers/TasksReducer";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
});
type PostResponceType<T = {}> = {
  resultCode: number;
  messages: string[];
  data: T;
};
export const todoListsApi = {
  getLists() {
    return instance.get<ListType[]>("todo-lists");
  },
  getTasks(todolistId: string) {
    return instance.get(`todo-lists/${todolistId}/tasks`);
  },
  addTask(todolistId: string, title: string) {
    return instance.post<
      PostResponceType<{ item: TaskType }>,
      AxiosResponse<PostResponceType<{ item: TaskType }>>,
      { title: string }
    >(`/todo-lists/${todolistId}/tasks`, { title });
  },
  editTask(todolistId: string, taskId: string, changedProperties: ModelType) {
    return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, changedProperties);
  },
  deleteTask(todolistId: string, taskId: string) {
    return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
  }
};
