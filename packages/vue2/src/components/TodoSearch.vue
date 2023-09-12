<template>
  <div>
    使用lib的方式引入
    <TodoListSearch
    ></TodoListSearch>
    <button @click="search">搜买菜</button>
    <button @click="changeTitle">改变标题</button>
    {{ options.title  }}
  </div>
</template>

<script>
// vue2 中无法识别vue3导出的很多字段，vue3直接所以打包出的组件vue2并不能直接使用
import TodoListSearch from '../../../vue-web-components/dist-vue/vue-web-components.mjs'
export default {
  name: 'TodoSearchCE',
  components: {
    TodoListSearch,
  },
  data: () => ({
    options: {
      title: '这里是vue的web components',
      placehold: '请在浏览器输入',
      buttonText: '点击搜索',
      hotWords: ['买菜', '打卡'],
      titleStyle: {
        color: '#999',
      },
    }
  }),
  props: {
    msg: String
  },
  mounted() {
    console.log(this.options)
  },
  methods: {
    inputChange(e) {
      console.log(e.detail);
    },
    search() {
      console.log(this.$refs.refCE?.options)
      console.dir(this.$refs.refCE)
      // this.$refs.refCE?.autoInput('买菜')

      this.$refs.refCE?._instance.exposed.autoInput('买菜')
    },
    changeTitle() {
      // this.$data.options = {
      //   ...this.$data.options,
      //   title: '改变后的标题'
      // }
      this.options.title = '改变后的标题2'
    }
  }
}
</script>
<style scoped>
</style>
