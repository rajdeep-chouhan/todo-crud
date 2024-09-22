const express = require("express");
const {
  getTodos,
  addTodo,
  getTodo,
  updateTodo,
  removeTodo,
} = require("../controllers/todoController");

const router = express.Router();

// method : GET
// access : Public
// endpoint : /api/todo
router.get("/", getTodos);

// method : POST
// access : Public
// endpoint : /api/todo
router.post("/", addTodo);

// method : GET
// access : Public
// endpoint : /api/todo/:id
router.get("/:id", getTodo);

// method : PUT
// access : Public
// endpoint : /api/todo/:id
router.put("/:id", updateTodo);

// method : DELETE
// access : Public
// endpoint : /api/todo/:id
router.delete("/:id", removeTodo);

module.exports = router;
