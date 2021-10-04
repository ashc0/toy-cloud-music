<template>
  <div id="app">
    <main-swiper :img="img" class="swiper"/>
    <scroll>
      <playlist
        v-for="item in playlists"
        :key="item.id"
        :coverUrl="item.coverImgUrl"
        :id="item.id"
        :desc="item.description"
        :name="item.name"
      />
    </scroll>
  </div>
</template>
<script>
import MainSwiper from "../common/mainSwiper.vue";
import Scroll from "../common/scroll.vue";
import Playlist from "../components/Main/playlist.vue";

export default {
  components: {
    MainSwiper,
    Scroll,
    Playlist,
  },
  data() {
    return {
      img: [],
      isSwiperShow: false,
      playlists: [],
      isPlaylistShow: false
    };
  },
  created() {
    this.$api.getBanner().then((res) => {
      this.img = res.data.banners.map((item) => item.pic);
      this.isSwiperShow = true
    });

    this.$api.getPlaylist().then((res) => {
      this.playlists = res.data.playlists.map((item) => ({
        id: item.id,
        coverImgUrl: item.coverImgUrl,
        description: item.description,
        name: item.name,
      }));
      this.isPlaylistShow = true
    });
  },
};
</script>
<style>
.swiper {
  margin-top: 8vh;
}
</style>