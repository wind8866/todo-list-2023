import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen">
      <h1>Hello, Next.js!</h1>
      <Link href="/todo-list">Todo List</Link>
    </div>
  );
}
