const express = require("express");
require("./db/mongoose"); //connect to databse
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("Get requests are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Under maintenance");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById(`5e86027103f0fd09cb8f274e`);
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);
  // const user = await User.findById("5e86010aa2ea250945690f98");
  // await user.populate("tasks").execPopulate();
  // console.log(user.tasks);
};
main();
