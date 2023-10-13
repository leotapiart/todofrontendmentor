import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [todo, setTodo] = useState({
        id: "",
        title: "",
        completed: false,
    });

    const handleOnChange = (e) => {
        setTodo({ ...todo, title: e.target.value });
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!todo.title.trim()) {
            return;
        }
        createTodo({ ...todo, id: Date.now() });
        setTodo({ ...todo, title: "" });
    };

    return (
        <form
            className="flex items-center gap-4 overflow-hidden rounded-md bg-white p-4 transition-colors duration-300 dark:bg-gray-800"
            onSubmit={handleOnSubmit}
        >
            <span className="inline-block h-5 w-5  rounded-full border-2"></span>
            <input
                type="text"
                name="title"
                placeholder="Create a new todo..."
                className="w-full text-gray-400 outline-none transition-colors duration-300 dark:bg-gray-800"
                value={todo.title}
                onChange={handleOnChange}
            />
        </form>
    );
};

export default TodoCreate;
