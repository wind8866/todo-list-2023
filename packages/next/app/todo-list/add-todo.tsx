'use client'
import { useRef } from 'react'

export default function TodoList({
  onAdd,
}: {
  onAdd: (text: string) => Promise<boolean>
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSubmit = async () => {
    const text = inputRef.current?.value
    if (text) {
      const isSuccess = await onAdd(text)
      if (isSuccess) inputRef.current!.value = ''
    }
  }
  return (
    <label className="cursor-pointer pl-16">
      <input
        className="border border-gray-700 border-r-0 px-4 py-2 rounded-l-md"
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleSubmit()
            setTimeout(() => {
              inputRef.current?.focus()
            }, 0)
          }
        }}
        ref={inputRef}
        type="text"
      />
      <button
        className="border border-gray-700 border-l-0 bg-green-600 dark:bg-green-800 rounded-r-md text-white px-4 py-2"
        onClick={handleSubmit}
      >
        Add Todo
      </button>
    </label>
  )
}
