<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-buttom
        class="check-button"
        :is-checked="isSelectAll"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>
    <div class="price">合计：{{ totalPrice }}</div>
    <div class="calculate">去计算: {{ checkLength }}</div>
  </div>
</template>

<script>
import CheckButtom from "components/content/checkButton/CheckButtom.vue";
import { mapGetters } from "vuex";
export default {
  components: { CheckButtom },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => item.checked == true)
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter((item) => item.checked).length; //拿计算属性里面的也要THIS？
    },
    isSelectAll() {
      if (this.cartList.length == 0) return false;
      return !this.cartList.filter((item) => !item.checked).length; //上面控制下面
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        this.cartList.forEach((item) => (item.checked = true));
      }
      console.log(111);
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  height: 40px;
  background-color: pink;
  position: relative;
  bottom: 40px;
  line-height: 40px;
}
.check-content {
  display: flex;
  align-items: center;
  /* margin-top: 20px; */
  margin-left: 10px;
  width: 60px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 22px;
}
span {
  margin-left: 2px;
}
.price {
  /* margin-top: 10px; */
  margin-left: 20px;
  font-size: 15px;
  flex: 1;
}
.calculate {
  width: 100px;
  background-color: red;
  color: #fff;
  padding-left: 5px;
}
</style>