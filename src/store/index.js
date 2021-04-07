import Vue from 'vue'
import Vuex from 'vuex'
//安装插件
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)
  //创建Store对象
const state = {
  cartList: []

}
const store = new Vuex.Store({
    state,

    mutations,
    actions,
    getters,
  })
  //挂载到Vue实例上 只要挂载了以后所有的组件都会有一个$store对象
export default store