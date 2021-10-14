<template>
  <div
    class="list-container"
    @touchstart="startCB"
    @touchmove="move"
    @touchend="endCB"
  >
    <div
      class="list-item"
      v-for="(item, index) in trackQueue"
      :key="item.id"
      :data-id="item.id"
      :data-coverurl="item.coverurl"
      :data-author="item.author"
      :data-name="item.name"
      :data-index="index"
    >
      ♪ {{ item.author }} - {{ item.name }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import longTouch from '../../mixin/long-touch'
export default {
  mixins: [longTouch],
  computed: {
    ...mapState(["trackQueue"]),
  },

  methods: {
    start(e) {
      this.timerId = setTimeout(() => {
        this.isLongClick = true;
        // 提交 mutations 添加歌曲
        this.removeSong(e.target.dataset.index);
      }, 500);
    },
  }

};
</script>

<style scoped>
.list-container {
  width: 100%;
  max-height: 30vh;
  overflow-y: scroll;
  position: fixed;
  bottom: 7vh;
  background-color: #fff;
}

.list-item {
  height: 8vh;
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px;
  border-bottom: 1px solid;
  line-height: 8vh;
}
</style>