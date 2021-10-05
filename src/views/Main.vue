<template>
  <div id="app">
    <router-view/>
    <main-swiper :img="img" class="swiper" />
    <scroll @getMore="getMore">
      <playlist
        v-for="item in playlists"
        :key="item.id"
        :coverUrl="item.coverImgUrl"
        :id="item.id"
        :desc="item.description"
        :name="item.name"
        @toList="tolist"
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
      isPlaylistShow: false,
      offset: 0,
    };
  },
  created() {
    this.getBanner();
    this.getPlaylist();
  },
  methods: {
    getBanner() {
      this.$api.getBanner().then((res) => {
        this.img = res.data.banners.map((item) => item.pic);
        this.isSwiperShow = true;
      });
    },

    getPlaylist(offset) {
      this.$api.getPlaylist(offset).then((res) => {
        this.playlists = this.playlists.concat(
          res.data.playlists.map((item) => ({
            id: item.id,
            coverImgUrl: item.coverImgUrl,
            description: item.description,
            name: item.name,
          }))
        );
        this.$nextTick(() => {
          this.$store.commit("endRequesting");
        });
      });
    },

    getMore() {
      if (!this.$store.state.isRequesting) {
        //  console.log("get more playlist");
        this.$store.commit("startRequesting");
        this.getPlaylist((this.offset += 5));
      }
    },

    tolist(id) {
      this.$router.push('/playlist?id='+id)
    },
  },
};
</script>
<style>
.swiper {
  margin-top: 8vh;
}
</style>