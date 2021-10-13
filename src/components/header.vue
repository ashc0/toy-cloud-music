<template>
  <div id="header">Toy Cloud Music
    <div class="search">🍳</div>
  </div>
</template>

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
  z-index: 99
}

.search {
  height: 5vh;
  width: 5vh;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10vh;
}
</style>