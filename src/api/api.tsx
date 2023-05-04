import { TodoistApi } from "@doist/todoist-api-typescript"

export const api = new TodoistApi("06e90790456e05d4a68e45f8a06ca6179feab247")

api.getProjects()
    .then((projects) => console.log(projects))
    .catch((error) => console.log(error))
