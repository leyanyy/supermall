<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车 ({{ length }})</div>
    </nav-bar>
    <!-- 顶部导航 -->
    <cart-list></cart-list>

    <!-- 商品列表 -->
    <!-- 底部汇总 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import CartList from "./childComps/cartList.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";

import { mapGetters } from "vuex";
export default {
  components: { NavBar, CartList, CartBottomBar },
  name: "Cart",
  computed: {
    //第一种写法
    // ...mapGetters(['cartLength'])
    //第二种写法
    ...mapGetters({
      length: "cartLength",
    }),
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: red;
  color: #fff;
  font-weight: 700;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
}
</style>
