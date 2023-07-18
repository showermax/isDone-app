import axios from "axios";
import { ListType } from "../reducers/ListReducer";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
});

export const todoListsApi = {
  getLists() {
    return instance.get<ListType[]>("todo-lists");
  },
  getTasks(todolistId: string) {
    return instance.get<any>(`/todo-lists/${todolistId}/tasks`);
  },
};
