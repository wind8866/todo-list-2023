"use client";
import { Todo } from "@todo-list/server";
import { useState } from "react";

export default function TodoApp({ children }: { children: React.ReactNode }) {
  const [list, setList] = useState<Todo[]>([]);

  async function addTodo(text: string) {
    const res = await fetch("http://127.0.0.1:2333/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((res) => {
        setList([
          ...list,
          {
            id: res.data?.id ?? 0,
            text: res.data?.text ?? "",
            finish: res.data?.finish ?? false,
          },
        ]);
      });
  }

  return (
    <div className="h-screen">
      <div className="m-auto pt-3 w-1/2">
        <h1>TodoList</h1>
        {/* <AddTodo add={addTodo} /> */}
        {children}
      </div>
    </div>
  );
}
