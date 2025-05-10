const http = require('http');

//External Module
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Local Module
const todoItemsRouter = require('./routers/todoItemsRouter');
const authRouter = require('./routers/authRouter');

const app = express();

const server = http.createServer(app);

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log('Handling request', req.url, req.method);
  next();
});
app.use("/api", authRouter);
app.use("/api/todo", todoItemsRouter);

const DB_PATH = "mongodb+srv://dhruvaa866:dhruvaadbroot%4005@completecoding.z7yhero.mongodb.net/todoApp?retryWrites=true&w=majority&appName=CompleteCoding";

const PORT = 3001;
mongoose.connect(DB_PATH).then(() => {
  console.log('Connected to mongodb');
  server.listen(PORT, () => {
    console.log(`server running on address http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log('error connecting to mongodb', error);
});
