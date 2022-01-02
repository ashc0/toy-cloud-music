<template>
  <div id="wrapper" @click="showDetail" ref="dtl">
    <div id="background">
      <img :src="detail.coverImgUrl" width="100%" loading="lazy"/>
    </div>

    <div class="cover">
      <img :src="detail.coverImgUrl" />
    </div>

    <div class="text">
      <div class="title">{{ detail.name }}</div>
      <div class="desc">{{ detail.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['detail'],
  methods: {
    showDetail() {

    }
  }
};
</script>

<style scoped>
#wrapper {
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
#background {
  filter: blur(10px);
  z-index: -1;
  position: absolute;
  top: -50%;
  opacity: .6;
}
.cover {
  height: 21vh;
  width: 21vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
}

.cover img {
  width: 100%;
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
  font-weight: bold;
}
.desc {
  display: inline-block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  font-size: 0.8rem;
  letter-spacing: 1px;
  line-height: 1.5;
  opacity: .9;
}
</style>