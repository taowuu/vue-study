<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this,
    }
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    }
  },
  methods: {
    validate(cb) {
      // cb(true)
      // [resultPromise]
      // 获取所有孩子 TaoFormItem
      // todo 层级获取不健壮
      const tasks = this.$children
        // 不是所有孩子都有 prop
        .filter(item => item.prop)
        .map(item => item.validate())
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false))
    }
  }
}
</script>