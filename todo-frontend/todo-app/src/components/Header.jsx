import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header({ isLoggedIn }) {
  const navigate = useNavigate();

  async function handleLogout() {
    const response = await fetch("https://todo-app-backend-j1g4.onrender.com/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    console.log("Logout response:", data);
    if (data.message === "Logout successful") {
      navigate("/");
    }
  }

  return (
    <header className="bg-purple-500 shadow-md p-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold">Todo App</h1>
      <div className="action-buttons space-x-4">
        {isLoggedIn ? (
          // <Link to="/logout">
          <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100"
            onClick={handleLogout}>Log Out</button>
          // </Link>
        ) : (
          <>
            <Link to="/">
              <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">Log In</button>
            </Link>
            <Link to="/signup">
              <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;