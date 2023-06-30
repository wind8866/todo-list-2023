import type { Todo } from "@todo-list/server";

// export async function getServerSideProps() {
//   const list: Todo[] = await fetch("http://127.0.0.1:2333/api/list")
//     .then((res) => res.json())
//     .then((resData) => resData.data?.list ?? []);
//   return {
//     props: {
//       list,
//     },
//   };
// }

export default function List() {
  const list: Todo[] = [];
  console.log(333);
  return (
    <div className="h-screen">
      <ul className="">
        {list.map((item) => (
          <li key={item.id} className="p-1">
            <label className="cursor-pointer">
              <input type="checkbox" name="todo" checked={item.finish} />
              <span className="pl-1">{item.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
