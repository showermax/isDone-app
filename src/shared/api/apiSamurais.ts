import axios, { AxiosResponse } from "axios";
import { ListType } from "../../entities/todolist/ListReducer";
import { ModelType, TaskType } from "../../entities/task/TasksReducer";


const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
});
type PostResponceType<T = {}> = {
  resultCode: number;
  messages: string[];
  data: T;
};
type AddTaskPayloadType ={
  title:string,
  description: string,
  deadline: Date,
  priority: number
}
export const todoListsApi = {
  getLists() {
    return instance.get<ListType[]>("todo-lists");
  },
  addList(title:string){
    return instance.post<PostResponceType<{item:ListType}>>('todo-lists', {title})
  },
  getTasks(todolistId: string) {
    return instance.get(`todo-lists/${todolistId}/tasks`);
  },
  addTask(todolistId: string, task: ModelType) {
    return instance.post<
      PostResponceType<{ item: TaskType }>,
      AxiosResponse<PostResponceType<{ item: TaskType }>,
    AddTaskPayloadType>
    >(`/todo-lists/${todolistId}/tasks`, { title: task.title, description: task.description, deadline: task.deadline, priority: task.priority });
  },
  editTask(todolistId: string, taskId: string, changedProperties: ModelType) {
    return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, changedProperties);
  },
  deleteTask(todolistId: string, taskId: string) {
    return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
  }
};
