import React from 'react';
import "./todo-list.css"
import Todo from "./Todo";
import {AddTodo} from "./AddTodo";
import {
    useDeleteTodoMutation,
    useFetchAllTodosQuery, useUpdateTodoMutation,
} from "../services/TodoService";

const TodoList = () => {
    const {data, error, isLoading, refetch} = useFetchAllTodosQuery('')
    const [updateTodo, {}] = useUpdateTodoMutation()
    const [deleteTodo, {}] = useDeleteTodoMutation()

    const handleRemove = (todo) => {
        deleteTodo(todo);
        refetch()
    }
    const handleUpdate = (todo) => {
        updateTodo(todo)
        refetch()
    }

    return (
        <div>
            <h2>Список дел</h2>
            <AddTodo/>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Сервер не отвечает</h1>}
            <div className="table">
                {data && data.map(todo =>
                    <Todo key={todo.id} todo={todo} update={handleUpdate} remove={handleRemove} />
                )}

            </div>
        </div>
    );
};

export default TodoList;