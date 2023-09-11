<template>
  <div>
    todo search
    <!--只改变optopns.title，传入options不是响应式的，有可能是个bug-->
    <!--可以使用 :options.prop="{...options}"-->
    <ion-todo-search-ce
      :options.prop="options"
      ref="refCE"
      @change="inputChange"
    ></ion-todo-search-ce>
    <button @click="search">搜买菜</button>
    <button @click="changeTitle">改变标题</button>
    {{ options.title  }}
  </div>
</template>

<script>
import { register } from '../../../vue-web-components/dist/vue-web-components.mjs'
register('ion-todo-search-ce')
export default {
  name: 'TodoSearchCE',
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
