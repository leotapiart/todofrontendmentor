import { useEffect, useState } from "react";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

// const initialStateTodos = [
//     {
//         id: Date.now() + 1,
//         title: "Complete online JavaScript course",
//         completed: true,
//     },
//     { id: Date.now() + 2, title: "Jag around the park 3x", completed: false },
//     { id: Date.now() + 3, title: "10 minutes meditation", completed: false },
//     { id: Date.now() + 4, title: "Read for 1 hour", completed: false },
//     { id: Date.now() + 5, title: "Pick up groceries", completed: false },
//     {
//         id: Date.now() + 6,
//         title: "Complete Todo App on Fronted Mentor",
//         completed: false,
//     },
// ];

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

function App() {
    const [todos, setTodos] = useState(initialStateTodos);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        const filteredArray = todos.filter((todo) => todo.id !== id);
        setTodos(filteredArray);
    };

    const completedTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    return (
        <div
            className=" min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')]
        bg-contain bg-no-repeat transition-all duration-300 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
        md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]
        "
        >
            <TodoHeader />
            <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />
                <TodoList
                    todos={todos}
                    deleteTodo={deleteTodo}
                    completedTodo={completedTodo}
                    filter={filter}
                />
                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />
                <TodoFilter setFilter={setFilter} filter={filter} />
            </main>

            <footer className="mt-8 text-center text-gray-500 transition-colors duration-300 dark:text-gray-400">
                Drag and drop to reorder list
            </footer>
        </div>
    );
}

export default App;
