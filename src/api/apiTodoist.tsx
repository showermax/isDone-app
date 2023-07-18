import { TodoistApi } from "@doist/todoist-api-typescript";

export const apiTodoist = new TodoistApi("cf1fa9f1da3b9a7bdaff8c15567d882c7b12d185");

apiTodoist
  .getProjects()
  .then((projects) => console.log(projects))
  .catch((error) => console.log(error));
