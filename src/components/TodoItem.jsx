import React from "react";
import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = React.forwardRef(
    ({ todo, deleteTodo, completedTodo, ...props }, ref) => {
        const { id, title, completed } = todo;

        return (
            <article
                {...props}
                className="flex gap-4 border-b border-b-gray-300 p-4 transition-colors duration-300 dark:bg-gray-800"
                id={id}
                ref={ref}
            >
                <button
                    className={`flex h-5 w-5 flex-none items-center justify-center rounded-full border-2
                ${
                    completed
                        ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : ""
                }`}
                    onClick={() => completedTodo(id)}
                >
                    {completed && <CheckIcon />}
                </button>
                <p
                    className={`grow ${
                        completed
                            ? "text-gray-300 line-through"
                            : "text-gray-600 transition-colors duration-300 dark:text-gray-300"
                    }`}
                >
                    {title}
                </p>
                <button className="flex-none" onClick={() => deleteTodo(id)}>
                    <CrossIcon />
                </button>
            </article>
        );
    }
);
export default TodoItem;
