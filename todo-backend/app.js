const http = require('http');

//External Module
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();

//Local Module
const todoItemsRouter = require('./routers/todoItemsRouter');
const authRouter = require('./routers/authRouter');

const app = express();

const server = http.createServer(app);

app.use(express.urlencoded());
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  }
}));

app.use(cors({
  credentials: true,
  origin: "http://localhost:5173"
}));

app.use((req, res, next) => {
  console.log('Handling request', req.url, req.method);
  next();
});

app.use("/api", authRouter);

app.use("/api/todo", todoItemsRouter);

const DB_PATH = process.env.DATABASE_URL;

const PORT = process.env.PORT || 3001;
mongoose.connect(DB_PATH).then(() => {
  console.log('Connected to mongodb');
  server.listen(PORT, () => {
    console.log(`server running on address http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log('error connecting to mongodb', error);
});
