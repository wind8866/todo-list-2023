import type { Todo } from "@todo-list/server";

function getList(): Promise<Todo[]> {
  return fetch("http://127.0.0.1:2333/api/list")
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}

export default async function List() {
  const list = await getList();
  console.log(list);

  return (
    <div className="h-screen">
      <h1>TodoList</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
