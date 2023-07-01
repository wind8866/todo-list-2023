'use client'
import type { ITodo } from '../../utils/types'
import TodoItem from './todo'
import AddTodo from './add-todo'
import { useState } from 'react'
import { queryAddTodo, queryChangeTodo, queryDeleteTodo } from './server'

export default function TodoList({
  initialList = [],
}: {
  initialList: ITodo[]
}) {
  const [list, setList] = useState(initialList)

  async function onFinish(id: number) {
    const newTodo = await queryChangeTodo({
      id,
      finish: !list.find((todo) => todo.id === id)?.finish,
    })
    setList(
      list.map((todo) => {
        return todo.id === id ? newTodo : todo
      }),
    )
  }
  async function onAdd(value: string): Promise<boolean> {
    try {
      const newTodo = await queryAddTodo(value)
      setList([...list, newTodo])
      return true
    } catch (error) {
      return false
    }
  }
  async function onDelete(id: number): Promise<boolean> {
    try {
      const newTodo = await queryDeleteTodo(id)
      setList(list.filter((todo) => todo.id !== id))
      return true
    } catch (error) {
      return false
    }
  }

  return (
    <div className="h-screen">
      <AddTodo onAdd={onAdd} />
      <ul>
        {list.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onFinish={onFinish}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  )
}
