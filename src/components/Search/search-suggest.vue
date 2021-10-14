<template>
  <div class="search-suggest-wrapper">
    <ul class="search-suggest" v-show="searchSuggest.length" @click="search">
      <li v-for="item in searchSuggest" :key="item" :data-keywords="item">
        <div class="search">
          <img src="../../img/search-black.png" />
        </div>
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["searchSuggest"],
  methods: {
    search(e) {
      this.$emit("toSuggest", e.target.dataset.keywords)
      this.$router.replace('/search?keywords=' + e.target.dataset.keywords)
    },
  },
};
</script>

<style scoped>
.search-suggest-wrapper {
  margin: 0 auto;
  margin-top: 8vh;
  width: 100%;
  box-sizing: border-box;
  padding: 0 3vw;
}

.search-suggest li {
  display: flex;
  font-size: 1rem;
  line-height: 3vh;
  color: rgb(143, 143, 143);
  margin-bottom: 2vh;
  border-bottom: 1px solid rgb(173, 173, 173);
}

.search-suggest li span {
  margin-left: 2vw;
  pointer-events: none;
}

.search {
  height: 2.5vh;
  width: 2.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.search img {
  width: 100%;
  height: 100%;
}
</style>