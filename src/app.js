const express = require("express");
require("./db/mongoose"); //connect to databse
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const app = express();
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
