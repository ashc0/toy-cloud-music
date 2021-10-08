<template>
  <div id="wrapperr">
    <div class="cover"></div>

    <div class="text">
      <div class="title"></div>
      <div class="desc"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#wrapperr{
  box-sizing: border-box;
  width: 100%;
  height: 24vh;
  padding: 0.8rem;
  display: flex;
  flex: 1;
  justify-content: space-around;
  margin-top: 8vh;
  position: relative;
  overflow: hidden;
  z-index: 9999999;
}

.cover {
  height: 21vh;
  width: 21vh;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgb(243, 242, 242);
}

.text {
  margin-left: 1rem;
  height: 13vh;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 0;
}
.title {
  display: inline-block;
  width: 100%;
  height: 40%;
  background-color: rgb(243, 242, 242);
}
.desc {
  display: inline-block;
  overflow: hidden;
  height: 40%;
  background-color: rgb(243, 242, 242);
  width: 100%;
}
</style>