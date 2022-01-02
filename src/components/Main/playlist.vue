<template>
  <div id="wrapper">
    <div class="cover">
      <img :src="coverUrl" />
    </div>

    <div class="text">
      <div class="title">{{ name }}</div>
      <div class="desc">{{ desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["coverUrl", "name", "id", "desc"],
};
</script>

<style scoped>
#wrapper {
  box-sizing: border-box;
  width: 100%;
  height: 16vh;
  padding: 0.8rem;
  display: flex;
  flex: 1;
  justify-content: space-between;
}

.cover {
  height: 13vh;
  width: 13vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;
  pointer-events: none;
}

.cover img {
  width: 100%;
  background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fa29f11ce5db6c9c45313db2bb420f7280b1ee770.png&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636368013&t=c0d02d0dc9dbe765e33a8aba83fc2a04);
}
.text {
  margin-left: 1rem;
  height: 13vh;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  pointer-events: none;
}
.title {
  display: inline-block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
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
  opacity: 0.9;
}
</style>