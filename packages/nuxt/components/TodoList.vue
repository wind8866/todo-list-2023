<script setup lang="ts">
import type { ITodo } from '@todo-list/next/utils/types'
import { stat } from 'fs'
const prefix = 'http://127.0.0.1:3000/api'

const {
  data: initialTodos,
  pending,
  error,
} = await useFetch<ITodo[], any>(`${prefix}/todos`)

const state = reactive({
  hideFinish: false,
  todos: initialTodos.value ?? [],
  text: '',
})
const todosView = computed(() => {
  if (state.hideFinish) {
    return state.todos.filter((todo) => !todo.finish)
  }
  return state.todos
})
const inputRef = ref<HTMLInputElement | null>(null)
async function addTodo() {
  const text = inputRef.value?.value
  if (text) {
    const newTodo = await $fetch<ITodo>(`${prefix}/todos`, {
      method: 'POST',
      body: JSON.stringify({ text }),
    })
    state.todos.unshift(newTodo)
    state.text = ''
    inputRef.value?.focus()
  }
}
async function onFinish(index: number, finish: ITodo['finish']) {
  const todo = state.todos[index]
  const newTodo: ITodo = await $fetch(`${prefix}/todos/${todo.id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      finish: !finish,
      id: todo.id,
    }),
  })
  state.todos[index] = newTodo
}
async function onDelete(id: number) {
  await $fetch(`${prefix}/todos/${id}`, {
    method: 'DELETE',
  })
  state.todos = state.todos.filter((todo) => todo.id !== id)
}
</script>
<template>
  <div className="h-screen text-center">
    <div className="flex justify-center">
      <label className="cursor-pointer pl-16">
        <input
          class="border text-gray-800 border-gray-700 border-r-0 px-4 py-2 rounded-l-md"
          ref="inputRef"
          @keyup.enter="addTodo"
          type="text"
          v-model="state.text"
        />
        <button
          class="border border-gray-700 border-l-0 bg-green-600 dark:bg-green-800 rounded-r-md text-white px-4 py-2"
          @click="addTodo"
        >
          Add Todo
        </button>
      </label>
      <button
        class="w-20 py-2 text-white bg-green-600 dark:bg-green-800 rounded-md ml-4"
        @click="state.hideFinish = !state.hideFinish"
      >
        {{ state.hideFinish ? 'Show' : 'Hide' }}
      </button>
      <ul>
        <li @click="" v-for="(todo, index) in todosView" :key="todo.id">
          <label class="cursor-pointer">
            <input
              type="checkbox"
              name="todo"
              :checked="todo.finish"
              @change="onFinish(index, todo.finish)"
            />
            <span class="{textClassName}">{{ todo.text }}</span>
          </label>
          <button @click="onDelete(todo.id)">删除</button>
        </li>
      </ul>
    </div>
  </div>
</template>
