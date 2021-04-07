import Toast from './Toast.vue'
const obj = {}
obj.install = (Vue) => { //默认的参数
  // console.log("执行了obj的install函数");
  // document.body.appendChild(Toast.$el)不行
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
    // 2.new 的方式，通过组件构造器，可以创建出来一个组件对象
  const toast = new toastConstructor()
    // 3.将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
    // 4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)


  Vue.prototype.$toast = toast
    // console.log(this.$toast);
}
export default obj