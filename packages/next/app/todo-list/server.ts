import { ITodo } from '../../utils/types'

const prefix = '/api'
interface IQueryChangeTodoResponse {
  id: ITodo['id']
  text?: ITodo['text']
  finish?: ITodo['finish']
}
export async function queryChangeTodo(
  newTodo: IQueryChangeTodoResponse,
): Promise<ITodo> {
  const res = await fetch(`${prefix}/todos/${newTodo.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodo),
  })
  const resData = await res.json()
  return resData
}

export async function queryAddTodo(text: string): Promise<ITodo> {
  const res = await fetch(`${prefix}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  })
  const resData = await res.json()
  return resData
}

export async function queryDeleteTodo(id: number) {
  const res = await fetch(`${prefix}/todos/${id}`, {
    method: 'DELETE',
  })
}
export async function queryTodoList(): Promise<ITodo[]> {
  const res = await fetch(`${prefix}/todos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const resData = await res.json()
  return resData
}
