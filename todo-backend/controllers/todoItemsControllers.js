const TodoItem = require("../models/TodoItem");

exports.createTodoItem = (req, res, next) => {
  // console.log(req.body);
  const { task, date } = req.body;

  const userId = req.userId;//changes

  const todoItem = new TodoItem({ task, date, userId });
  todoItem.save().then(() => {
    res.status(201).json(todoItem);
  });
}

exports.getTodoItems = (req, res, next) => {
  const userId = req.userId;//changes

  TodoItem.find({ userId }).then((todoItems) => {//changes
    res.status(200).json(todoItems);
  }).catch((error) => {
    console.log('error while fetching items', error);
  });
}

exports.deleteTodoItem = (req, res, next) => {
  const { id } = req.params;
  TodoItem.findByIdAndDelete(id).then(() => {
    res.status(204).json({ _id: id });
  }).catch((error) => {
    console.log('error while deleting item', error);
  });
}

exports.markCompleted = (req, res, next) => {
  const { id } = req.params;
  TodoItem.findById(id).then((todoItem) => {
    todoItem.completed = true;
    todoItem.save().then(() => {
      res.json(todoItem);
    })
  })
}