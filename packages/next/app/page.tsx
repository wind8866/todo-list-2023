import Link from 'next/link'

export default async function Page() {
  return (
    <div className="h-screen">
      <h1>Hello, TodoList!</h1>
      <img src="logo.svg" alt="logo" />
      <ul>
        <li>
          <Link href="/todo-list">Todo List</Link>
        </li>
        <li>
          <Link href="/demo">demo</Link>
        </li>
      </ul>
    </div>
  )
}
