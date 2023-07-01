'use client'
import { Todo } from '@todo-list/server'

export default function Todo({
  todo,
  onFinish,
  onDelete,
}: {
  todo: Todo
  onFinish: (id: number) => void
  onDelete: (id: number) => Promise<boolean>
}) {
  function change() {
    onFinish(todo.id)
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
        <span className="px-1">{todo.text}</span>
        <button onClick={del}>x</button>
      </label>
    </li>
  )
}
