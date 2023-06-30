// 参考：https://chuyao.github.io/2017/07/11/simple-api-server-with-nodejs/

import express from "express";

export interface Todo {
  id: number;
  text: string;
  finish: boolean;
}

const app = express();
app.use(express.json());
function sleep(min: number = 100, max: number = 1000) {
  const time = Math.floor(Math.random() * (max - min + 1) + min);
  return new Promise((resolve) => setTimeout(resolve, time));
}

// 初始数据
let todoList: Todo[] = [
  {
    id: 1,
    text: "React",
    finish: true,
  },
  {
    id: 2,
    text: "jQuery",
    finish: false,
  },
];
let count: number = todoList.length;

const formatRespond = ({ data = {}, code = 200 }) => {
  return JSON.stringify({
    code: code,
    data: data,
  });
};

//设置跨域访问
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 请求 todoList 接口
app.get("/api/list", async (req, res) => {
  await sleep(0, 500);
  res.send(formatRespond({ data: todoList }));
});

// 添加 todo 接口
app.post("/api/add", async (req, res) => {
  if (!req.body) {
    throw new Error("请求参数错误");
  }
  if (req.body.text != null) {
    const todo: Todo = {
      id: ++count,
      text: String(req.body.text),
      finish: false,
    };
    todoList.push(todo);
    console.log("请求成功", req.body);
    await sleep();
    res.send(formatRespond({ data: todo }));
  } else {
    console.error("请求失败", req.body);
    await sleep(500, 1000);
    res.send(formatRespond({ code: 501 }));
  }
});

// changeFinish 接口
app.get("/api/change", async (req, res) => {
  console.log(req.query);
  if (req.query.id != null) {
    todoList = todoList.map((todo) => {
      if (req.query.id === String(todo.id)) {
        const newTodo = {
          ...todo,
          finish: !todo.finish,
        };
        console.log("修改成功", newTodo);
        return newTodo;
      }
      return todo;
    });
    await sleep();
    res.send(formatRespond({ code: 200 }));
  } else {
    await sleep();
    res.send(formatRespond({ code: 501 }));
  }
});

// delTodo 接口
app.post("/api/del", async (req, res) => {
  if (!req.body) {
    throw new Error("请求参数错误");
  }
  if (req.query.id != null) {
    todoList = todoList.filter((todo) => req.query.id !== String(todo.id));
    await sleep();
    res.send(formatRespond({ code: 200 }));
  } else {
    await sleep();
    res.send(formatRespond({ code: 501 }));
  }
});

// 启动服务
const port = 2333;
app.listen(port, function () {
  console.log(`启动成功，请访问 http://127.0.0.1:${port}`);
});
