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
export default {
  components: {
    MainHeader: header,
    PlayButton,
  },
};
</script>

<style>

</style>