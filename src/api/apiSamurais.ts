import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
});

const listApi = {
  getLists() {
    return instance.get("todo-lists");
  },
};
