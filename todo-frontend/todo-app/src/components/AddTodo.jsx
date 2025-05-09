import { useState } from "react";

function AddTodo({ handleNewTodo }) {

  const [todoName, setTodoName] = useState('');
  const [todoDate, setTodoDate] = useState('');


  function handleOnChange(event) {
    let todoName = event.target.value;
    setTodoName(todoName);
  }

  function handleTodoDate(event) {
    let todoDate = event.target.value;
    setTodoDate(todoDate);
  }

  function handleAddTodo() {
    handleNewTodo(todoName, todoDate);
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mb-6 ">
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          onChange={handleOnChange}
          placeholder="Enter TODO here"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          onChange={handleTodoDate}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;