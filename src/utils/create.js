import Vue from 'vue'
// 挂载弹窗组件
function create(Component, props) {
  const vm = new Vue({
    // 获取组件构造函数 or extend
    render: h => h(Component, {props}),
    // 不指定则构造真实 dom， 但不追加
    // 指定 body 会覆盖页面其他元素
  }).$mount() 
  // 获取真实 dom
  document.body.appendChild(vm.$el)
  // 当前 vue 只有一个组件
  const comp = vm.$children[0]
  // 清除自己
  comp.remove = function() {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  }
  return comp
}

export default create