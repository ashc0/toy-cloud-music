<template>
  <div id="header">Toy Cloud Music
    <div class="search" @click="toSearch">
      <img src="../img/search-icon.png">
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toSearch() {
      this.$router.push('/search')
    }
  }
}
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
  text-align: center;
  position: fixed;
  top: 0;
  z-index: 2
}

.search {
  height: 3vh;
  width: 3vh;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search img {
  width: 100%;
  height: 100%;
}
</style>