'use client'
import { Todo } from '@todo-list/server'

export default function Todo({
  todo,
  onFinish,
  onDelete,
}: {
  todo: Todo
  onFinish: (id: number, finish: boolean) => void
  onDelete: (id: number) => Promise<boolean>
}) {
  function change() {
    onFinish(todo.id, !todo.finish)
  }
  function del() {
    onDelete(todo.id)
  }
  return (
    <li key={todo.id} className="p-1">
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="todo"
          checked={todo.finish}
          onChange={change}
        />
        <span style={{ padding: '0 0.5rem' }} className="inline-block px-1">
          {todo.text}
        </span>
        <button onClick={del}>删除</button>
      </label>
    </li>
  )
}
