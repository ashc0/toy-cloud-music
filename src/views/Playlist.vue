<template>
  <div class="wrapper">
    <list-header :detail="detail"/>
  </div>
</template>

<script>
import ListHeader from '../components/Playlist/header.vue'
export default {
  components: {
    ListHeader,
  },
  data() {
    return {
      songIds: [],
      songs: [],
      detail: {},
    };
  },
  created() {
    this.$api
      .getPlaylistDetail(this.$route.query.id)
      .then((res) => {
        console.log(res);
        this.songIds = res.data.playlist.trackIds.map((item) => item.id);
        this.detail = {
          coverImgUrl: res.data.playlist.coverImgUrl,
          description: res.data.playlist.description,
          name: res.data.playlist.name,
          tags: res.data.playlist.tags
        };
        console.log(this.detail);
      })
      .then(() => {
        this.$api.getSongDetail(this.ids).then((res) => {
          this.songs = res.data.songs.map((item) => ({
            name: item.name,
            id: item.id,
            author: item.ar.map((item) => item.name),
            album: item.al.name,
          }));
          console.log(this.songs);
        });
      });
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
  /* margin-top: 8vh; */
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  z-index: 999999;
  background-color: #fff;
}

</style>