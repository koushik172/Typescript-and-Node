import { Router } from "express";
const todoRouter = Router();
const todos = [];
todoRouter.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
todoRouter.post('/todo', (req, res, next) => {
    console.log(req.body);
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    console.log(todos);
    res.status(200).json();
});
todoRouter.post("/delete", (req, res, next) => {
    let item = todos.find(x => x.id === req.body.id);
    if (item) {
        todos.splice(todos.indexOf(item), 1);
        res.status(200).json("Done");
    }
    else {
        res.status(400).json("Not Found");
    }
});
todoRouter.post("/edit", (req, res, next) => {
    let item = todos.find(x => x.id === req.body.id);
    if (item) {
        item.text = req.body.text;
        res.status(200).json("Done");
    }
    else {
        res.status(400).json("Not Found");
    }
});
export default todoRouter;
