<template>
  <div>
    <swiper :img="img" style="overflow: hidden"></swiper>
  </div>
</template>

<script>
import swiper from "../my-components/my-swiper/swiper.vue";

export default {
  props: {
    img: {
      type: Array,
      required: true
    }
  },
  components: {
    swiper,
  }
};
</script>