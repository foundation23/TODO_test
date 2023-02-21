import { useState } from "react";
import './addTodo.css';
import {useCreateTodoMutation} from "../services/TodoService";

export const AddTodo = () => {
    const ending = new Date()
    const creation = new Date()
    const created = false

    const [createTodo, {}] = useCreateTodoMutation()
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTodo({title, ending, creation, created});
        setTitle('');
    }

    const handleInput = e => {
        setTitle(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form className="form"
              onSubmit={handleSubmit}>
            <input className="input"
                   value={title}
                   type="text"
                   onChange={handleInput}
                   onKeyDown={handleKeyPress}
                   placeholder="What needs to be done?"/>
        </form>
    )
}