<template>
  <div>
    <h2>组件通信</h2>
    <!-- props, 自定义事件 -->
    <Child1 msg="some msg from parent" @some-event="onSomeEvent"></Child1>
    <!-- 事件总线 -->
    <Child2 ref="child2" msg="some msg from parent" @click="onClick"></Child2>
    <!-- $children -->
    <button @click="goHome">回家吃饭</button>
  </div>
</template>

<script>
  import Child1 from '@/components/communication/Child1.vue'
  import Child2 from '@/components/communication/Child2.vue'
  
  export default {
    // 依赖
    provide() {
      return {
        foo: 'foooo'
      }
    },
    components: {
      Child1, Child2
    },
    methods: {
      onSomeEvent(msg) {
        console.log('Communition:', msg);
      },
      goHome() {
        this.$children[0].eat()
      },
      onClick() {
        console.log('来自老爹回调函数的处理', this)
      }
    },
    mounted () {
      // $children 获取子组件数组，不包括普通元素，不保证模板中顺序
      // 因为组件可能是异步，声明在前加载在后
      // console.log('$children ', this.$children);
      // $refs用于引用命名的元素或组件，可包含普通元素
      // console.log('$refs ', this.$refs.child2);
      
    },

  }
</script>

<style scoped>

</style>