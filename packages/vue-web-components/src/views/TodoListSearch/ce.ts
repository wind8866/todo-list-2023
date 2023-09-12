import { defineCustomElement } from 'vue'
import TodoListSearch from './index.ce.vue'
const TodoListSearchComponent = defineCustomElement(TodoListSearch)

export { TodoListSearchComponent }
export function register(tagName: string = 'todo-list-search') {
  customElements.define(tagName, TodoListSearchComponent)
}

declare module 'vue' {
  export interface GlobalComponents {
    TodoListSearchComponent: typeof TodoListSearchComponent
  }
}
