const express = require("express");
require("./db/mongoose"); //connect to databse
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const app = express();
const port = process.env.PORT || 3000;

//
const multer = require("multer");
const upload = multer({
  dest: "imgs",
  limits: {
    fileSize: 1 * 1024 * 1024
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error("Please  upload a Word doc"));
    }
    cb(undefined, true);
  }
});
app.post(
  "/upload",
  upload.single("upload"),
  (req, res) => {
    res.send("");
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
