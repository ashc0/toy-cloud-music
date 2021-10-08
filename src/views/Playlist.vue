<template>
  <transition name="pl">
    <div class="wrapper" @touchmove="changeTitle">
      <list-header :title="title" />

      <loading v-if="!loaded" />
      <transition name="load">
        <list-detail :detail="detail" ref="detail" v-show="loaded" />
      </transition>
      <list-loading v-if="!listLoaded" />
      <transition name="load">
        <song-list :songs="songs" v-show="listLoaded" />
      </transition>
    </div>
  </transition>
</template>

<script>
import ListLoading from "../components/Playlist/listLoading.vue";
import ListDetail from "../components/Playlist/detail.vue";
import ListHeader from "../components/Playlist/header.vue";
import Loading from "../components/Playlist/loading.vue";
import SongList from "../components/Playlist/songList.vue";
export default {
  components: {
    ListDetail,
    ListHeader,
    SongList,
    Loading,
    ListLoading,
  },
  props: ['id'],
  data() {
    return {
      songIds: [],
      songs: [],
      detail: {},
      title: "歌单",
      loaded: false,
      listLoaded: false,
    };
  },
  methods: {
    changeTitle() {
      if (
        this.$refs.detail.$refs.dtl.getBoundingClientRect().bottom <=
        window.innerHeight * 0.08
      ) {
        this.title = this.detail.name;
      } else {
        this.title = "歌单";
      }
    },

    getPlaylistDetail() {
      this.$api
        .getPlaylistDetail(this.id)
        .then((res) => {
          this.songIds = res.data.playlist.trackIds.map((item) => item.id);
          this.detail = {
            coverImgUrl: res.data.playlist.coverImgUrl,
            description: res.data.playlist.description,
            name: res.data.playlist.name,
            tags: res.data.playlist.tags,
          };
          this.loaded = true;
          // console.log(this.detail);
        })
        .then(() => {
          this.getSongs();
        });
    },

    getSongs() {
      this.$api.getSongDetail(this.ids).then((res) => {
        this.songs = res.data.songs.map((item) => ({
          name: item.name,
          id: item.id,
          author: item.ar.map((item) => item.name),
          album: item.al.name,
        }));
        this.listLoaded = true;
      });
    },
  },
  activated() {
    console.log(this.id);
    console.log(this.$route);
    this.loaded = false
    this.listLoaded = false;
    this.getPlaylistDetail();
  },


  computed: {
    ids() {
      return this.songIds.join(",");
    },
  },
};
</script>

<style scoped>
.wrapper {
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  z-index: 999999;
  background-color: #fff;
}
.pl-enter-active {
  transition: all 0.3s ease;
}

.pl-leave-active {
  transition: all 0.3s ease;
}

.pl-enter {
  transform: translateX(100%);
}

.pl-leave-to {
  transform: translateX(100%);
}

.load-enter {
  opacity: 0.1;
}

.load-enter-active {
  transition: all 0.3s ease;
}
</style>