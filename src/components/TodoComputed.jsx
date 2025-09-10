const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="px-4 py-4 flex justify-between rounded-b-md bg-white transition-all duration-500 dark:bg-gray-900">
            <span className="text-gray-400">
                {computedItemsLeft} Items Left
            </span>
            <button className="text-gray-400 " onClick={clearCompleted}>
                clear completed
            </button>
        </section>
    );
};
export default TodoComputed;
