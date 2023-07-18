import axios from "axios";
import { ListType } from "../reducers/ListReducer";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
});

export const listApi = {
  getLists() {
    return instance.get<ListType[]>("todo-lists");
  },
};
