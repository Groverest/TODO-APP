import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 pb-4 pt-4 border-b-gray-400 border-b px-4 transition-all duration-1000 dark:bg-gray-900">
            <button
                className={`h-5 w-5 flex-none rounded-full border-2 ${
                    completed
                        ? "flex content-center items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : "inline-block"
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <IconCheck />}
            </button>
            <p
                className={`text-gray-600 grow dark:text-gray-400 ${completed && "line-through"}`}
            >
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <IconCross />
            </button>
        </article>
    );
};

export default TodoItem;
