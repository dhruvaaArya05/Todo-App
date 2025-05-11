<h1>📝 Todo App with User Authentication & Session Management</h1>
<h3>A simple full-stack Todo application built with **MERN stack** (MongoDB, Express, React, Node.js) that includes **user authentication**, **session management**, and **CRUD operations** for todos.</h3>

🚀 Features

- ✅ User Signup and Login
- 🔒 **Session-Based Auth** with `express-session`
- 👤 **User-Specific Todos**
- 🗃️ **MongoDB** for data persistence
- 🍪 **Cookies** to maintain login sessions
- ⚛️ **React Router** for routing between pages
- 🧼 Input Validation and Error Handling

🧰 Tech Stack

### Frontend
- React
- React Router
- Fetch API with `withCredentials: true`

### Backend
- Node.js
- Express
- MongoDB (via Mongoose)
- express-session
- connect-mongo (for storing sessions in MongoDB)
- CORS configuration with credentials support

📂 Folder Structure
<pre>
  client/ # React frontend
└── src/
├── components/
├── pages/
└── App.js

server/ # Express backend
├── controllers
├── models/ # Mongoose schemas (User, Todo)
├── routes/ # Auth and Todo routes
├── middleware/ # Auth check middleware
├── app.js # Express app setup / Entry point
</pre>

## ⚙️ Setup Instructions

### 1. Clone the Repository
git clone https://github.com/dhruvaaArya05/Todo-App.git
cd Todo App

### 2. Backend Setup
cd todo-backend
npm install
npm start

### 3.Frontend Setup
cd todo-frontend
cd todo-app
npm run dev

#Screenshots
![Screenshot 2025-05-11 225105](https://github.com/user-attachments/assets/0b018b1d-dbe6-46e6-ac41-3abe65da7a95)
![Screenshot 2025-05-11 225131](https://github.com/user-attachments/assets/9ca6d145-bcac-481c-a9ba-c8cb0a2e6793)
![Screenshot 2025-05-11 225155](https://github.com/user-attachments/assets/5e308531-0efc-4ad9-98b7-81fde24f6f35)

🧑‍💻Author
Made by Dhruva Keshav Arya



