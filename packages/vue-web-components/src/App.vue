<script setup lang="ts">
import TodoListSearch from './views/TodoListSearch/index.ce.vue'

import { register } from './views/TodoListSearch/index'

register()

function vueSearchChange(val: string) {
  console.log('vue', val)
}
function vueCESearchChange(val: any) {
  // 这里的val是DOM事件
  console.log('ce', val?.detail)
}
</script>

<template>
  <div>
    <TodoListSearch
      disabled
      :options="{
        title: 'vue组件',
        placehold: '这里是vue组件',
        buttonText: '搜索啊'
      }"
      @change="vueSearchChange"
    />
    <todo-list-search
      disabled
      :options="{
        title: 'vue ce 组件',
        placehold: '这里是ce组件',
        buttonText: '搜索啊'
      }"
      @change="vueCESearchChange"
    ></todo-list-search>
  </div>
</template>

<style>
h1 {
  color: green;
}
</style>
