import Link from 'next/link'
import Header from '../components/Header'

export default async function Page() {
  return (
    <div className="text-center h-screen">
      <Header />
      <h2 className="text-2xl">Projects</h2>
      <ul>
        <li>
          <Link className="underline" href="/todo-list">
            Todo List
          </Link>
        </li>
        <li>
          <Link className="underline" href="/demo">
            demo
          </Link>
        </li>
        <li>
          <Link className="underline" href="/ce">
            web components
          </Link>
        </li>
      </ul>
    </div>
  )
}
