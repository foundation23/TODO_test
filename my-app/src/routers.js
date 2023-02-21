import TodoList from "./components/TodoList";
import GroupList from "./components/GroupList";
import {GROUP_ROUTE, LIST_ROUTE} from "./utils/consts";

export const router = [
    {
        path: LIST_ROUTE,
        Component: TodoList,
    },
    {
        path: GROUP_ROUTE,
        Component: GroupList
    }
]