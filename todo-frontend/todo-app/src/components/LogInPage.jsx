import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function LogInPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  async function handleLoginSubnmit(e) {
    e.preventDefault();
    const response = await fetch("https://todo-app-backend-j1g4.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log("Login response:", data);
    if (data.message === "Login successful" && data.name) {
      localStorage.setItem("name", data.name);
      setIsLoggedIn(true);
      navigate("/todo");
    } else if (data.message === "Invalid user") {
      alert("Please sign up first");
    } else if (data.message === "Invalid email or password") {
      alert("Invalid email or password");
    }
    // const user = {
    //   email: email,
    //   password: password
    // };
    // console.log("Logging in user:", user);
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn}></Header>
      <div className="flex justify-center items-center min-h-[89vh] bg-gray-100">
        <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Welcome Back</h2>
          <form onSubmit={handleLoginSubnmit}>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <button
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              type="submit"
            >
              Log In
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <span
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default LogInPage;