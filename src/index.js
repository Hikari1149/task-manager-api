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

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc777" }, "thismynewcourse", {
//     expiresIn: "7 days"
//   });
//   console.log({ token });

//   const data = jwt.verify(token, "thismynewcourse");
//   console.log({ data });
// };
// myFunction();
