const expressAsyncHandler = require("express-async-handler");
const Todo = require("../models/todoModel");

// Getting All Todos
const getTodos = expressAsyncHandler(async (req, res) => {
  const todos = await Todo.find();

  if (!todos) {
    res.status(404);
    throw new Error("Todos Not Found !!");
  }
  res.status(200).json(todos);
});

// Getting a Single Todo
const getTodo = expressAsyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(404);
    throw new Error("Todo Not Found !!");
  }
  res.status(200).json(todo);
});

// Adding a New Todo
const addTodo = expressAsyncHandler(async (req, res) => {
  const { title, description, isPublished, author } = req.body;

  if (!title || !description ) {
    res.status(401);
    throw new Error("Please fill All Details");
  }

  // Create a new todo
  const newTodo = await Todo.create({
    title,
    description,
    
  });
  if (!newTodo) {
    res.status(401);
    throw new Error("Unable to create Todo");
  }
  res.status(201).json(newTodo);
});

// Deleting a Todo
const removeTodo = expressAsyncHandler(async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);

  res.json({
    success: true,
  });
});

// Updating a Todo
const updateTodo = expressAsyncHandler(async (req, res) => {
  const Updatedtodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!Updatedtodo) {
    res.status(401);
    throw new Error("Todo Not Updated !!");
  }
  res.status(200).json(Updatedtodo);
});

module.exports = { getTodos, getTodo, addTodo, removeTodo, updateTodo };
