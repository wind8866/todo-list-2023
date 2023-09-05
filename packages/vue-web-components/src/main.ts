import './assets/main.css'
import { createApp, defineCustomElement } from 'vue'
import TodoListSearch from './views/TodoListSearch.vue'

const CurrentTimeComponent = defineCustomElement(TodoListSearch);
customElements.define('todo-list-search', CurrentTimeComponent);
document.querySelector('#app')?.appendChild(
  new CurrentTimeComponent({
    // 初始化 props（可选）
  })
)
