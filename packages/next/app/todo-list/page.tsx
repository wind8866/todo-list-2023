import { dbQueryList } from '../../utils/db'
import type { ITodo } from '../../utils/types'
import TodoList from './todo-list'

export default async function Page() {
  // TODO: ts 类型
  const initialList: ITodo[] = (await dbQueryList()) as ITodo[]
  return (
    <div className="h-screen">
      <TodoList initialList={initialList} />
    </div>
  )
}
