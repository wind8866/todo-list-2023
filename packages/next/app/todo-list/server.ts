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
  const res = await fetch(`${prefix}/todos`, {
    method: 'POST',
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
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  })
  const resData = await res.json()
  return resData
}

export async function queryDeleteTodo(id: number): Promise<ITodo> {
  const res = await fetch(`${prefix}/todos`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })
  const resData = await res.json()
  return resData
}
export async function queryTodoList(): Promise<ITodo[]> {
  const res = await fetch(`${prefix}/todos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  })
  const resData = await res.json()
  return resData
}
