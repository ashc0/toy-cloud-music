<template>
  <swiper :img="img" style="overflow: hidden">

  </swiper>
</template>

<script>
import swiper from "../my-components/my-swiper/swiper.vue";

export default {
  props: {
    img: {
      type: Array,
      required: true,
    },
  },
  components: {
    swiper,
  },
};
</script>