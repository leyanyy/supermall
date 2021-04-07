<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad: true,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imgLoad() {
      if (this.isLoad) {
        this.$emit("swiperImgLoad");
        this.isLoad = false;
      }
    },
  },
};
</script>

<style scoped>
</style>
