const express = require("express")
const router = express.Router()
const totoController = require("../controllers/todo.controller")

router.post("/", totoController.createTodo);
router.get("/", totoController.getTodos);
router.get("/:todoId", totoController.getTodoById);
router.delete("/:todoId",totoController.deleteTodo);
router.post("/:todoId",totoController.updateTodo);


module.exports = router;