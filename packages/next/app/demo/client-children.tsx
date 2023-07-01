"use client";

import { Todo } from "@todo-list/server";
import { useState } from "react";

// 使用数据 Client Component children
export default function ClientChildren({
  initialList,
}: {
  initialList: Todo[];
}) {
  const [list, setList] = useState(initialList);
  return (
    <div>
      <button
        onClick={() =>
          setList([
            ...list,
            {
              id: 34,
              text: "new todo",
              finish: false,
            },
          ])
        }
      >
        add
      </button>
      {list.map((todo) => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </div>
  );
}
