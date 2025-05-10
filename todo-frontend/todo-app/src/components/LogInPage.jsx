import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function LogInPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleLoginSubnmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log("Login response:", data);
    if (data.message === "Login successful") {
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
      <Header></Header>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mb-6 mt-10">
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        <form onSubmit={handleLoginSubnmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            type="submit">
            Log In
          </button>
        </form>
      </div>
    </>

  );
}

export default LogInPage;