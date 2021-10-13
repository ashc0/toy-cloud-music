<template>
  <div id="app">
    <MainHeader />
    <keep-alive>
      <router-view />
    </keep-alive>
    <PlayButton />
  </div>
</template>

<script>
import header from "@/components/header.vue";

import PlayButton from "@/components/play-button/main.vue";

import { mapMutations } from "vuex";
export default {
  components: {
    MainHeader: header,
    PlayButton,
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

<style>
</style>