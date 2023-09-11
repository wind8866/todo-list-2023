<template>
  <div id="app">
    <TodoSearchCE msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import TodoSearchCE from './components/TodoSearchCE.vue'

export default {
  name: 'App',
  components: {
    TodoSearchCE
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
