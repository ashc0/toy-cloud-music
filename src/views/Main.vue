<template>
  <div id="app">
    <main-swiper :img="img"/>
  </div>
</template>
<script>
import MainSwiper from '../common/mainSwiper.vue';

export default {
  components: {
    MainSwiper,
  },
  data() {
    return {
      img: [
        "http://p1.music.126.net/Mk4mxcQdNAEppOS29d_g2w==/109951166479774175.jpg?imageView&quality=89",
        "http://p1.music.126.net/vfVq8ykignMPSwm5V85iVw==/109951166475891788.jpg?imageView&quality=89",
        "http://p1.music.126.net/Z60AzIQuaua_CgMDves0Ug==/109951166479792571.jpg?imageView&quality=89",
        "http://p1.music.126.net/rSAIODhNbS4LiVNcLFA0GA==/109951166480415764.jpg?imageView&quality=89",
      ],
    };
  },
};
</script>
<style lang="less">

</style>
