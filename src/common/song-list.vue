<template>
  <div
    class="wrapper"
    @touchstart="startCB"
    @touchmove="move"
    @touchend="endCB"
  >
    <song-item
      v-for="(item, index) in songs"
      :key="item.id"
      :index="index"
      :song="item"
      :data-id="item.id"
      :data-coverurl="item.albumCoverUrl"
      :data-author="item.author.join('/')"
      :data-name="item.name"
    />
  </div>
</template>

<script>
import songItem from "./song-item.vue";
import longTouch from "../mixin/long-touch";
export default {
  mixins: [longTouch],
  components: { songItem },
  props: ["songs"],
  methods: {
    end(e) {
      clearTimeout(this.timerId);
      if (!this.isLongClick && !this.isMoved) {
        this.pause();
        let song = {
          name: e.target.dataset.name,
          author: e.target.dataset.author,
          coverurl: e.target.dataset.coverurl,
          id: e.target.dataset.id,
        };

        this.setSong(song);
        this.addSong(song);
      }

      this.isLongClick = false;
      this.isMoved = false;
    },
  }
};
</script>

<style scoped>
.wrapper {
  width: 100vw;
}

.touched {
  color: white;
  background-color: #eee;
}
</style>