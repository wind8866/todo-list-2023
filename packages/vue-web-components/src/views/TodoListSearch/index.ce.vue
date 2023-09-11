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
import type { Props } from './type'
const input = ref()
function change() {
  // console.log(input.value)
  emits('change', input.value)
}
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  options: () => ({
    title: 'default title',
    placehold: 'default placehold',
    buttonText: 'default buttonText',
    // 外部改变内部样式3：通过参数
    titleStyle: {},
    hotWords: []
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
  <div>
    <h1>{{ props.options.title }}</h1>
    {{ props.disabled }}
    <span>
      <input :placehold="props.options.placehold" type="text" v-model="input" @input="change" />
      <button>{{ props.options.buttonText }}</button>
      <div>
        <h2 :style="props.options.titleStyle">常用搜索：</h2>
        <ul>
          <slot>
            <li :key="word" v-for="word of props.options.hotWords" @click="input = word">
              {{ word }}
            </li>
          </slot>
        </ul>
      </div>
    </span>
  </div>
</template>
<style>
:host {
  --title-color: #944;
}
h1 {
  margin-top: 0;
  font-size: 20px;
  color: var(--title-color, '#944');
}
:host > div {
  background-color: #eee;
  padding: 1em;
}
</style>
