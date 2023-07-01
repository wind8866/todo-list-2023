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
    <label className="cursor-pointer">
      <input ref={inputRef} type="text" />
      <button
        className="border bg-blue-500 text-white px-4 py-2"
        onClick={handleSubmit}
      >
        Add Todo
      </button>
    </label>
  )
}
