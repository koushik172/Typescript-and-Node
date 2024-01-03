import express from "express";

import bodyParser from "body-parser";

import todoRouter from "./routes/todos";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(todoRouter);

app.listen(3000, () => {
    console.log(`http://localhost:3000`);
});
