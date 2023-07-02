'use client'
import type { ITodo } from '../../utils/types'
import TodoItem from './todo'
import AddTodo from './add-todo'
import { useMemo, useState } from 'react'
import { queryAddTodo, queryChangeTodo, queryDeleteTodo } from './server'

export default function TodoList({
  initialList = [],
}: {
  initialList: ITodo[]
}) {
  const [list, setList] = useState(initialList)
  const [hideFinish, setHideFinish] = useState(false)
  const filterList = useMemo(() => {
    if (hideFinish) {
      return list.filter((todo) => !todo.finish)
    }
    return list
  }, [list, hideFinish])

  async function onFinish(id: number, finish: boolean) {
    const newTodo = await queryChangeTodo({ id, finish })
    setList(
      list.map((todo) => {
        return todo.id === id ? newTodo : todo
      }),
    )
  }
  async function onAdd(value: string): Promise<boolean> {
    try {
      const newTodo = await queryAddTodo(value)
      setList([newTodo, ...list])
      return true
    } catch (error) {
      return false
    }
  }
  async function onDelete(id: number): Promise<boolean> {
    try {
      await queryDeleteTodo(id)
      setList(list.filter((todo) => todo.id !== id))
      return true
    } catch (error) {
      return false
    }
  }

  return (
    <div className="h-screen">
      <div className="flex justify-end">
        <AddTodo onAdd={onAdd} />
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md ml-4"
          onClick={() => setHideFinish(!hideFinish)}
        >
          {hideFinish ? 'Show' : 'Hide'}
        </button>
      </div>
      <ul>
        {filterList.map((todo) => (
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
