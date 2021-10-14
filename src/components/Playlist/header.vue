<template>
  <div id="header">
    <div class="content">
      <div class="back" @click="back">←</div>
      <span class="title">{{ title }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
  methods: {
    back() {
      this.$router.replace('/')
    }
  }
};
</script>
<style scoped>
#header {
  width: 100%;
  height: 8vh;
  line-height: 8vh;
  font-size: 1.3rem;
  font-weight: bold;
  color: #fff;
  background-color: rgb(245, 65, 65);
  position: fixed;
  top: 0;
  z-index: 99999999;
}
.back {
  position: absolute;
  left: 3vw;
}
.title {
  position: absolute;
  left: 11vw;
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>