import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, completedTodo, filter }) => {
    const todosFiltrados = todos.filter((todo) => {
        if (filter === "all") return todo;
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
    });

    return (
        <div className="mt-8 overflow-hidden rounded-t-md bg-white transition-colors duration-300 dark:bg-gray-800">
            {todosFiltrados.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    completedTodo={completedTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
