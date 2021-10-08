<template>
  <div class="wrapper">
    <song-item
      v-for="(item, index) in songs"
      :key="item.id"
      :index="index"
      :song="item"
    />
  </div>
</template>

<script>
import songItem from "../../common/songItem.vue";

export default {
  components: { songItem },
  props: ["songs"],
};
</script>

<style scoped>
.wrapper {
  width: 100vw;
  margin-top: 32vh;
}
</style>