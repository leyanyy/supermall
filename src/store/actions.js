import { ADD_COUNTER, ADD_TO_CART }
from './mutations-types'
export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid) //会循环cartLiat里面的item里面的iid是否和payload里面的iid相同，返回的是布尔值
      if (oldProduct) {
        // oldProduct.count += 1

        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前商品数量加1')




      } else {
        payload.count = 1
          // context.cartList.push(payload)
        context.commit(ADD_TO_CART, payload)
        resolve("添加当前商品")


      }
    })
  }
}