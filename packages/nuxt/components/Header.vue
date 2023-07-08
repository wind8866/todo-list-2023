<script setup lang="ts">
import Logo from '@todo-list/next/public/logo.svg'
defineProps<{
  subTitle?: string
}>()
</script>

<template>
  <header>
    <NuxtLink to="/" class="flex justify-center mt-6 items-center">
      <img :src="Logo" :width="60" :height="60" alt="logo" />
      <h1 class="text-6xl pl-3 leading-normal">TodoList</h1>
      <h2
        v-if="subTitle"
        class="text-xl leading-normal align-baseline self-start"
      >
        {{ subTitle }}
      </h2>
    </NuxtLink>
  </header>
</template>
