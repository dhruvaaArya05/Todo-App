function TodoItem({ item, onDeleteTodo, onMarkCompleted }) {

  function handleDeleteButton() {
    onDeleteTodo(item.id);
  }

  function handleCheckboxChange() {
    onMarkCompleted(item.id);
  }

  const formattedDate = new Date(item.dueDate).toLocaleDateString();

  return (
    <div className={`max-w-md mx-auto bg-white rounded-lg shadow-md ${item.completed ? "opacity-50" : ""} `}>
      <div className="p-4 flex items-center justify-between border-b ">
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={item.completed}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <div className={`todo-name text-gray-800 font-medium ${item.completed ? "line-through" : ""}`}>
            {item.name}
          </div>
        </div>
        <div className="todo-date text-gray-500">
          {formattedDate}
        </div>
        <button
          className="delete-todo bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
          onClick={handleDeleteButton}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
