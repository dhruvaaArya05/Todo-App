import { Route, Routes } from "react-router-dom";
import TodoPage from "./components/TodoPage";
import LogInPage from "./components/LogInPage";
import SignupPage from "./components/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogInPage />} />
      <Route path="/todo" element={<TodoPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
    </Routes>
  );
}

export default App;