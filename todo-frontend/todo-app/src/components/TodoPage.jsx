import TodoHeading from "./TodoHeading";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import { addItemToServer, getItemsFromServer } from "../services/itemsService";
import { deleteItemFromServer } from "../services/itemsService"
import { markItemAsCompleted } from "../services/itemsService";
import Header from "./Header";
// import LogInPage from "./components/LogInPage";
// import { Outlet } from "react-router-dom";

function TodoPage() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodoItems = async () => {
      const items = await getItemsFromServer();
      setTodoList(items);
    };
    fetchTodoItems();
  }, []);

  const handleNewTodo = async (todoName, todoDate) => {
    const serverItem = await addItemToServer(todoName, todoDate);
    const todoItem = [...todoList, serverItem];
    setTodoList(todoItem);
  };

  async function handleDeleteTodo(id) {
    const deletedId = await deleteItemFromServer(id);
    setTodoList(todoList.filter((item) => item.id !== deletedId));
  }

  async function handleMarkCompleted(id) {
    const updatedItem = await markItemAsCompleted(id);
    setTodoList(todoList.map((item) => (item.id === id ? updatedItem : item)));
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 ">
      <Header></Header>
      <TodoHeading />
      <AddTodo handleNewTodo={handleNewTodo} />
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onDeleteTodo={handleDeleteTodo}
          onMarkCompleted={handleMarkCompleted}
        />
      ))}
    </div>
  );
}

export default TodoPage;