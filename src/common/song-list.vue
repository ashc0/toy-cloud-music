<template>
  <div class="wrapper" @touchstart="startCB" @touchmove="move" @touchend="endCB">
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
import { mapMutations } from "vuex";
import debounce from '../utils/debounce'
export default {
  components: { songItem },
  props: ["songs"],
  data() {
    return {
      timerId: 0,
      isLongClick: false,
      isMoved: false,
      startCB: null,
      endCB: null
    };
  },
  methods: {
    ...mapMutations(["addSong", "setSong", "play", "pause"]),
    // 利用计时器来设置长按，长按只添加入列表而不播放
    start(e) {

      this.timerId = setTimeout(() => {
        this.isLongClick = true;

        // 提交 mutations 添加歌曲
        this.addSong({
          name: e.target.dataset.name,
          author: e.target.dataset.author,
          id: e.target.dataset.id,
          coverurl: e.target.dataset.coverurl,
        });

        console.log("长按500ms", e.target.dataset.id);
      }, 500);
    },
    // 如果是move事件，则取消掉短按长按
    move() {
      clearTimeout(this.timerId);
      this.isMoved = true;
    },
    // 只有当既不是长按也不是移动 才是短按
    end(e) {
      clearTimeout(this.timerId);
      if (!this.isLongClick && !this.isMoved) {
        this.pause()
        this.$api.getSongUrl(e.target.dataset.id).then((res) => {
          let song = {
            name: e.target.dataset.name,
            author: e.target.dataset.author,
            coverurl: e.target.dataset.coverurl,
            url: res.data.data[0].url,
            id: e.target.dataset.id,
          };

          this.setSong(song);
          this.addSong(song);
        });
      }

      this.isLongClick = false;
      this.isMoved = false;
    },
  },

  created() {
    this.startCB = debounce.call(this,this.start,200)
    this.endCB = debounce.call(this,this.end,200)
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