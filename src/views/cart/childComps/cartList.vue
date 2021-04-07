<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :item-info="item"
      />
    </scroll>
  </div>
</template>

<script>
// <li v-for="item of cartList" :key="item.index">{{ item }}</li>

import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem.vue";
export default {
  components: { Scroll, CartListItem },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    this.$refs.scroll.refresh();
    console.log(9);
  },
};
</script>

<style scoped>
.cart-list {
  height: calc(100vh - 44px - 49px);
}

.content {
  height: 100%;
  overflow: hidden;
}
</style>