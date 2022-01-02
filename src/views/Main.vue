<template>
  <div id="app">
    <main-swiper :img="img" class="swiper" />
    <scroll @getMore="getMore" @click.native="tolist">
      <playlist
        v-for="item in playlists"
        :key="item.id"
        :coverUrl="item.coverImgUrl"
        :id="item.id"
        :desc="item.description"
        :name="item.name"
        :data-id="item.id"
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
      playlists: [],
      offset: 0,
      playlistShow: false,
      swiperShow: false,
    };
  },
  created() {
    this.getBanner();
    this.getPlaylist();
  },
  // 路由离开前会触发
  beforeRouteLeave(to, from, next) {
    // 记录此时的
    this.$route.meta.x = window.pageXOffset;
    this.$route.meta.y = window.pageYOffset;
    next();
  },
  methods: {
    getBanner() {
      this.$api.getBanner().then((res) => {
        this.img = Object.freeze(res.data.banners.map((item) => item.pic));
        // this.$nextTick(() => {
          if (!this.swiperShow) {
            this.swiperShow = true;
            if (this.playlistShow) this.$store.commit("changeFirstPageLoaded");
          }
        // });
      });
    },

    getPlaylist(offset) {
      this.$api.getPlaylist(offset).then((res) => {
        if (this.playlists.length === 1) this.playlists = [];
        this.playlists = this.playlists.concat(
          res.data.playlists.map((item) => ({
            id: item.id,
            coverImgUrl: item.coverImgUrl + "?param=100y100",
            description: item.description,
            name: item.name,
          }))
        );

        // this.$nextTick(() => {
          if (!this.playlistShow) {
            this.playlistShow = true;
            if (this.swiperShow) this.$store.commit("changeFirstPageLoaded");
          }

          // 确保加载完成才能上拉加载更多，否则多次上拉会一下加载一大坨
          this.$store.commit("endRequesting");
        // });
      });
    },

    getMore() {
      if (!this.$store.state.isRequesting) {
        this.$store.commit("startRequesting");
        this.getPlaylist((this.offset += 5));
      }
    },

    tolist(e) {
      this.$router.push("/playlist?id=" + e.target.dataset.id);
    },
  },
};
</script>
<style>
.swiper {
  margin-top: 8vh;
}
</style>

