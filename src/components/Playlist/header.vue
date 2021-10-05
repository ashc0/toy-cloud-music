<template>
  <div id="wrapper" @click="showDetail">
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
  height: 20vh;
  padding: 0.8rem;
  display: flex;
  flex: 1;
  justify-content: space-between;
}

.cover {
  height: 16vh;
  width: 16vh;
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
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  font-size: 0.8rem;
  letter-spacing: 1px;
  line-height: 1.5;
  opacity: .9;
}
</style>