<template>
  <div>
    <!-- input 双向绑定 -->
    <!-- v-bind 展开 $attrs -->
    <input type="type" :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>
<script>
export default {
  inheritAttrs:false,// 避免设置到根元素
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    onInput(e) {
      // 派发 input 事件
      this.$emit('input', e.target.value)
      // 通知父级执行校验
      // todo 健壮性
      this.$parent.$emit('validate')
    },
  }
}
</script>