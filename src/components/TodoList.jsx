import TodoItem from "./TodoItem";
import { Draggable, Droppable } from "@hello-pangea/dnd";

const TodoList = ({ todos, deleteTodo, completedTodo, filter }) => {
    const todosFiltrados = todos.filter((todo) => {
        if (filter === "all") return todo;
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
    });

    return (
        <Droppable droppableId="todos">
            {(droppableProvided) => (
                <div
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                    className="mt-8 overflow-hidden rounded-t-md bg-white transition-colors duration-300 dark:bg-gray-800"
                >
                    {todosFiltrados.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            index={index}
                            draggableId={`${todo.id}`}
                        >
                            {(draggableProvided) => (
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    deleteTodo={deleteTodo}
                                    completedTodo={completedTodo}
                                    ref={draggableProvided.innerRef}
                                    {...draggableProvided.dragHandleProps}
                                    {...draggableProvided.draggableProps}
                                />
                            )}
                        </Draggable>
                    ))}

                    {droppableProvided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TodoList;
