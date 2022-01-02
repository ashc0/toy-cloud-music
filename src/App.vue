<template>
  <div id="app">
    <MainHeader />
    <div id="ld-wrapper" v-if="!firstPageLoaded">
      <div class="content">Loading</div>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <PlayButton />
  </div>
</template>

<script>
import header from "@/components/header.vue";

import PlayButton from "@/components/play-button/main.vue";

import { mapState, mapMutations } from "vuex";
export default {
  components: {
    MainHeader: header,
    PlayButton,
  },
  computed: {
    ...mapState(["firstPageLoaded"]),
  },
  methods: {
    ...mapMutations(["initTrackQueue", "initCurrentSong"]),
  },

  created() {
    // 初始化播放列表及其信息
    // 如果 localStorage 中没有 track-queue，则初始化为空数组并初始化 state
    if (localStorage.getItem("track-queue") === null) {
      this.initTrackQueue();
    }

    this.initCurrentSong();
  },
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}

.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: red;
  font-size: 2rem;
  font-weight: bold;
}
</style>