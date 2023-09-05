<script lang="ts">
export interface requestItem {
  label: string
  url: string
}
export interface Options {}
</script>

<script setup lang="ts">
import { ref } from 'vue'
const input = ref()
</script>

<template>
  <span>
    <input type="text" v-model="input" />
    {{ input }}
  </span>
</template>
