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

## ⚙️ Setup Instructions

### 1. Clone the Repository
git clone https://github.com/dhruvaaArya05/Todo-App.git
