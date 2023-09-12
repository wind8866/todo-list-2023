<template>
  <div id="app">
    <HelloWorld />
    <hr />
    <!-- <TodoSearchCE msg="Welcome to Your Vue.js App"/> -->
    <hr/>
    <TodoSearch/>
  </div>
</template>

<script>
// import TodoSearchCE from './components/TodoSearchCE.vue'
import TodoSearch from './components/TodoSearch.vue'
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    // TodoSearchCE,
    TodoSearch,
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
