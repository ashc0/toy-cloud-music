<template>
  <div id="app">
    <router-view/>
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
import debounce from '../utils/debounce'

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
      cb: null
    };
  },
  created() {
    this.getBanner();
    this.getPlaylist();
    this.cb = debounce(this.getMore, 500)
  },
  // 路由离开前会触发
  beforeRouteLeave(to,from,next) {
    // 记录此时的
    this.$route.meta.x = window.pageXOffset
    this.$route.meta.y = window.pageYOffset
    next()
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
      // console.log(66);
      if (!this.$store.state.isRequesting) {
        //  console.log("get more playlist");
        this.$store.commit("startRequesting");
        this.getPlaylist((this.offset += 5));
      }
    },

    tolist(e) {
      // console.log(e.target.dataset.id);
      this.$router.push('/playlist?id='+e.target.dataset.id)
    },
  }
};
</script>
<style>
.swiper {
  margin-top: 8vh;
}
</style>