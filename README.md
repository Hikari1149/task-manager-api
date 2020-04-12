# task-manager

#### 

#### [https://hikari-task-manager.herokuapp.com](https://hikari-task-manager.herokuapp.com) 

You can test it with postman

#### 设置环境变量

```text
1.Using an environment from an env file, Create config/dev.env in your root directory
2.Set these variable in config/dev.env

    SENDGRID_API_KEY='xx' // sendgrid email services
    JWT_SECRET='xx
    MONGODB_URL='xx' 

3 Use env-cmd to run the project
```

#### 生成token

用户登入或者注册时, 将userId加密成token

```text
 const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, {
    expiresIn: "7 Days"
 });
 
 //create user: POST /users/create
 //login POST /users/login  body:{email:'xx',password:'xx'}
```

#### token校验

从请求头中取出token, 解密出userId. 根据userId查找用户是否存在,来判断token是否合法

```text
const token = req.header("Authorization").replace("Bearer ", "");
const decoded = jwt.verify(token, process.env.JWT_SECRET);
```



#### Mongoose Schema pre hook

在操作document前,如果要做一些特定的操作 可以在schema的pre方法上绑定事件

```text
// hash the plain text password before saving
userSchema.pre("save", async function(next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// delete user tasks when user is removed
userSchema.pre("remove", async function(next) {
  const user = this;
  await Task.deleteMany({
    owner: user._id
  });
  next();
});

```



