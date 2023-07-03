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
  let textClassName = 'inline-block px-2'
  let liClassName = 'p-1'
  if (todo.finish) {
    textClassName += ' line-through'
    liClassName += ' text-gray-400'
  }
  return (
    <li key={todo.id} className={liClassName}>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="todo"
          checked={todo.finish}
          onChange={change}
        />
        <span className={textClassName}>{todo.text}</span>
        <button onClick={del}>删除</button>
      </label>
    </li>
  )
}
