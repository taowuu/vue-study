<template>
  <div>
    <!-- label -->
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <!-- 校验信息 -->
    <p v-if="error">{{ error }}</p>
    <!-- 校验规则 -->
    <!-- <p>{{ form.model }}</p> -->
    <!-- <p>{{ form.rules }}</p> -->
  </div>
</template>

<script>
import Schema from 'async-validator'

export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
    }
  },
  mounted() {
    this.$on('validate', () => {
      // console.log('validate')
      this.validate()
    })
  },
  methods: {
    validate() {
      // 规则
      // console.log(this.form.rules[this.prop])
      const rules = this.form.rules[this.prop]
      // 当前值
      // console.log(this.form.model[this.prop])
      const value = this.form.model[this.prop]
      // 描述对象
      // {username:rules}
      const desc = {[this.prop]:rules}
      // console.log('desc', desc)
      const schema = new Schema(desc)
      // console.log('1')
      return schema.validate({ [this.prop]: value }, errors => {
        if(errors) {
          // console.log('errors')
          this.error = errors[0].message
        } else {
          this.error = ''
        }
      })
    }
  },
  data() {
    return {
      error: '',
    }
  },
}
</script>