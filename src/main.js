import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import toast from './components/common/toast/index'
import FastClick from 'fastclick'
import lazyLoad from 'vue-lazyload'


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() //创建Vue实例
Vue.use(toast) //只要用Vue.use就会执行toast下的index.js导出的obj对象的install函数
Vue.use(lazyLoad)


new Vue({
    render: h => h(App),
    router,
    store
  }).$mount('#app')
  //解决移动端300ms的延迟
FastClick.attach(document.body)