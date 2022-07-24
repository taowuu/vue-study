<template>
  <div @click="$emit('some-event', 'msg from child1')">
    <h3>child1</h3>
    <p>{{msg}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      msg: {
        type: String,
        default: ''
      },
    },
    mounted () {
      // 总线方式通信
      // this.$bus.$on('event-from-child2', msg => {
      //   console.log('总线接受：Child1 的信息为 ', msg);
      // });

      // 利用共同祖辈方式通信
      // 兄弟组件可以使用$parent, 没有直接关系使用$root
      // $parent 派发和监听是同一个
      this.$parent.$on('event-from-child2', msg => {
        console.log('共同祖辈元素接受：Child1:', msg);
      });
    },
    methods: {
      eat() {
        console.log('这就回家')
      }
    }
  }
</script>

<style scoped>

</style>