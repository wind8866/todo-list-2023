import { dbQueryList } from '../../utils/db'
import type { ITodo } from '../../utils/types'
import TodoList from './todo-list'

export default async function Page() {
  const initialList = await dbQueryList()
  return (
    <div className="h-screen">
      <TodoList initialList={initialList} />
    </div>
  )
}
