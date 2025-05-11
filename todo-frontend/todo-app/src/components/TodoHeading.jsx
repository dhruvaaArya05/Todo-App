import { useState, useEffect } from "react";

function TodoHeading() {
  const [name, setUserName] = useState('');

  useEffect(() => {
    const name = localStorage.getItem("name");
    setUserName(name);
  })

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center  mb-8 text-purple-600">Welcome, {name}</h1>
    </div>
  );
};

export default TodoHeading;