<template>
  <div>
    <!-- $listener 会展开老爹传入的回调并监听 -->
    <h3 v-on="$listeners">child2</h3>
    <button @click="sendToChild1">给child1发送消息</button>
    <!-- $attrs -->
    <!-- 未用 props 接收的属性 -->
    <p>{{ $attrs.msg }}</p>
    <!-- provide/inject -->
    <p>{{ bar }}</p>
  </div>
</template>

<script>
  export default {
    // 注入
    // inject: ['foo'],
    inject: {bar: {from: 'foo'}},
    methods: {
      sendToChild1() {
        // 利用事件总线发送事件
        // this.$bus.$emit('event-from-child2', '总线发送：some msg from child2')
        // 利用共同祖辈元素发送事件
        // $parent 派发和监听是同一个
        this.$parent.$emit('event-from-child2', '共同祖辈元素发送：some msg from child2')
      }
    },
  }
</script>

<style scoped>

</style>