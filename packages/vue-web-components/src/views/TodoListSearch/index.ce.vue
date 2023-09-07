<script lang="ts">
export interface requestItem {
  label: string
  url: string
}
export interface Options {}

export default {
  name: 'TodoListSearch'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
const input = ref()
function change() {
  // console.log(input.value)
  emits('change', input.value)
}
interface Props {
  disabled: boolean
  options: {
    title: string
    placehold: string
    buttonText: string
  }
}
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  options: () => ({
    title: 'default title',
    placehold: 'default placehold',
    buttonText: 'default buttonText'
  })
})
const emits = defineEmits<{
  (e: 'change', val: string): void
}>()
console.log(props)
defineExpose({
  autoInput(val: string, type: 'finish' | 'todo' | 'all' = 'all') {
    input.value = val
    console.log('执行了搜索', val, type)
  }
})
</script>

<template>
  <h1>{{ props.options.title }}</h1>
  {{ props.disabled }}
  <span>
    <input type="text" v-model="input" @input="change" />
    <button>搜索</button>
  </span>
</template>
<style>
h1 {
  font-size: 20px;
  color: #944;
}
</style>
