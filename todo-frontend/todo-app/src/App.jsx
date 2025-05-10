// import TodoHeading from "./components/TodoHeading";
// import AddTodo from "./components/AddTodo";
// import TodoItem from "./components/TodoItem";
// import { useEffect, useState } from "react";
// import { addItemToServer, getItemsFromServer } from "./services/itemsService";
// import { deleteItemFromServer } from "./services/itemsService";
// import { markItemAsCompleted } from "./services/itemsService";
// import Header from "./components/Header";
// import LogInPage from "./components/LogInPage";
// import { Outlet } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoPage from "./components/TodoPage";
import LogInPage from "./components/LogInPage";
import SignupPage from "./components/SignupPage";

function App() {
  // const [todoList, setTodoList] = useState([]);
  // const [login, setLogin] = useState(false);

  // useEffect(() => {
  //   const fetchTodoItems = async () => {
  //     const items = await getItemsFromServer();
  //     setTodoList(items);
  //   };
  //   fetchTodoItems();
  // }, []);

  // const handleNewTodo = async (todoName, todoDate) => {
  //   const serverItem = await addItemToServer(todoName, todoDate);
  //   const todoItem = [...todoList, serverItem];
  //   setTodoList(todoItem);
  // };

  // async function handleDeleteTodo(id) {
  //   const deletedId = await deleteItemFromServer(id);
  //   setTodoList(todoList.filter((item) => item.id !== deletedId));
  // }

  // async function handleMarkCompleted(id) {
  //   const updatedItem = await markItemAsCompleted(id);
  //   setTodoList(todoList.map((item) => (item.id === id ? updatedItem : item)));
  // }

  // function onLogin(isLogin) {
  //   console.log("Login status:", isLogin);
  //   setLogin(isLogin);
  // }

  return (
    <Routes>
      <Route path="/" element={<LogInPage />} />
      <Route path="/todo" element={<TodoPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
    </Routes>
    // <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 ">
    //   <Header onLogin={onLogin}></Header>
    //   {login ? (
    //     <LogInPage />
    //   ) : (
    //     <>
    //       <TodoHeading />
    //       <AddTodo handleNewTodo={handleNewTodo} />
    //       {todoList.map((item) => (
    //         <TodoItem
    //           key={item.id}
    //           item={item}
    //           onDeleteTodo={handleDeleteTodo}
    //           onMarkCompleted={handleMarkCompleted}
    //         />
    //       ))}
    //     </>
    //   )}

    // </div>
    // <>
    // <Header></Header>
    // <Outlet></Outlet>
    // </>
  );
}

export default App;