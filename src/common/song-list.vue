<template>
  <div class="wrapper" @touchstart="start" @touchmove="move" @touchend="end">
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

export default {
  components: { songItem },
  props: ["songs"],
  data() {
    return {
      timerId: 0,
      isLongClick: false,
      isMoved: false
    };
  },
  methods: {
    // 利用计时器来设置长按
    start(e) {
      this.timerId = setTimeout(() => {
        this.isLongClick = true;
        console.log("长按500ms",e.target.dataset.id);
      }, 500);
    },
    // 如果是move事件，则取消掉短按长按
    move() {
      clearTimeout(this.timerId)
      this.isMoved = true
    },
    // 只有当既不是长按也不是移动 才是短按
    end(e) {
      clearTimeout(this.timerId);
      if (!this.isLongClick && !this.isMoved) {
        this.$api.getSongUrl(e.target.dataset.id).then(res => {
          this.$store.commit('setSong',{
            name: e.target.dataset.name,
            author: e.target.dataset.author,
            coverurl: e.target.dataset.coverurl,
            url: res.data.data[0].url
          })
          this.$store.commit('play')
          console.log(this.$store.state.song);
        })
        // console.log("非长按", );
      }
      this.isLongClick = false;
      this.isMoved = false
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100vw;
  /* margin-top: 32vh; */
}

.touched {
  color: white;
  background-color: #eee;
}
</style>