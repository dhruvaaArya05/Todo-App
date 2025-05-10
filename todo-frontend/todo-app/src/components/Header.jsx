import { Link } from "react-router-dom";

function Header() {

  return (
    <header className="bg-purple-500 shadow-md p-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold">Todo App</h1>
      <div className="action-buttons space-x-4">
        <Link to="/">
          <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">Log In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">Sign Up</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;