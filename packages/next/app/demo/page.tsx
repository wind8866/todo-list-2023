import { Todo } from "@todo-list/server";
import { useState } from "react";
import ClientChildren from "./client-children";
// 能做到吗？
// 1. 想要在服务端加载list数据作为状态值进行初始化
// 2. 又想在客户端继续操作list

// 请求数据 Server Component
async function getData() {
  const res = await fetch("http://127.0.0.1:2333/api/list");
  return res.json()?.data ?? [];
}
export default async function Page() {
  const initialList = await getData();
  console.log("initialList", initialList);

  return <ClientChildren initialList={initialList} />;
}
