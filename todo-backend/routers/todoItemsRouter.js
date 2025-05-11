const express = require('express');
const todoItemsRouter = express.Router();

const todoItemsController = require('../controllers/todoItemsControllers');
const { authenticateUser } = require("../middlewares/authuser");

todoItemsRouter.use(authenticateUser);

todoItemsRouter.get("/", todoItemsController.getTodoItems);
todoItemsRouter.post("/", todoItemsController.createTodoItem);
todoItemsRouter.delete("/:id", todoItemsController.deleteTodoItem);
todoItemsRouter.put("/:id/completed", todoItemsController.markCompleted);

module.exports = todoItemsRouter;