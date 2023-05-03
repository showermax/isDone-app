import {useAppSelector} from "../hooks/hooks";
import {RootReducerType} from "../redux/store";

export const ListsSelector=(state:RootReducerType) => state.lists
export const TasksSelector=(state:RootReducerType) => state.tasks