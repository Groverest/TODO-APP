import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

const initialstateTodos = [
    {
        id: 1,
        title: "complete online Javascript Marcos curse",
        completed: true,
    },
    { id: 2, title: "Go to the gym", completed: false },
    { id: 3, title: "10 minutes meditation", completed: true },
    { id: 4, title: "Computed course", completed: false },
];

const App = () => {
    const [todos, setTodos] = useState(initialstateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => setFilter(filter);

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    return (
        <div
            className="bg-[url('./assets/images/bg-mobile-light.jpg')] 
        bg-no-repeat bg-contain min-h-screen dark:bg-black
         bg-gray-300 transition-all duration-1000
         dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]"
        >
            <Header />
            <main className="container mx-auto px-4 mt-8">
                <TodoCreate createTodo={createTodo} />

                <TodoList
                    todos={filteredTodos()}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />

                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />

                <TodoFilter changeFilter={changeFilter} />
            </main>

            <footer className="text-center mt-8 dark:text-gray-400">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};
export default App;
