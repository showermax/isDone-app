import axios, { AxiosResponse } from "axios";
import { ListType } from "../reducers/ListReducer";
import { TaskType } from "../reducers/TasksReducer";

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
    return instance.get(`/todo-lists/${todolistId}/tasks`);
  },
  addTask(todolistId: string, title: string) {
    return instance.post<
      PostResponceType<{ item: TaskType }>,
      AxiosResponse<PostResponceType<{ item: TaskType }>>,
      { title: string }
    >(`/todo-lists/${todolistId}/tasks`, { title });
  },
};
