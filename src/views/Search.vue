<template>
  <div class="wrapperr">
    <div class="input-wrapper">
      <div class="back" @click="back">←</div>
      <input
        type="text"
        class="input"
        placeholder="搜索"
        @input="cb"
        v-model="keywords"
      />
    </div>

    <search-suggest :searchSuggest="searchSuggest" @toSuggest="toSuggest" v-show="!isSearched" />

    <div class="scroll-wrapper" ref="aa">
      <scroll @getMore="getMoreSearchResults">
        <song-list :songs="searchResults" v-show="isSearched" />
      </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "../common/scroll.vue";
import SongList from "../common/song-list.vue";
import searchSuggest from "../components/Search/search-suggest.vue";
import debounce from "../utils/debounce";
export default {
  components: { searchSuggest, SongList, Scroll },
  data() {
    return {
      keywords: "",
      cb: null,
      searchSuggest: [],
      isSearched: false,
      searchResults: [],
      offset: 0,
      isRequesting: false
    };
  },
  methods: {
    back() {
      this.$router.replace("/");
    },

    input() {
      console.log(1);
      if (this.keywords !== "") {
        this.$api.getSearchSuggest(this.keywords).then((res) => {
          this.searchSuggest = res.data.result.allMatch.map(
            (item) => item.keyword
          );
        });
      } else {
        this.searchSuggest = [];
      }

      this.isSearched = false;
    },

    getSearchResults(keywords, offset) {
      this.isRequesting = true
      this.$api.getSearchResults(keywords, offset).then((res) => {
        console.log(res);
        this.searchResults = this.searchResults.concat(
          res.data.result.songs.map((item) => ({
            id: item.id,
            name: item.name,
            albumCoverUrl: item.al.picUrl,
            album: item.al.name,
            author: item.ar.map((item) => item.name),
          }))
        );
        this.isRequesting = false
        this.isSearched = true;
      });
    },

    getMoreSearchResults() {
      if(this.isRequesting) return
      this.getSearchResults(this.keywords, this.offset += 15)
    },

    toSuggest(keywords) {
      this.keywords = keywords
    }
  },
  created() {
    this.cb = debounce(this.input);
  },
  beforeRouteUpdate(to, from, next) {
    this.searchResults = []
    this.offset = 0
    this.getSearchResults(to.query.keywords);
    next();
  },
};
</script>

<style scoped>
.wrapperr {
  position: absolute;
  top: 0;
  z-index: 9999;
  height: 100vh;
  width: 100%;
  background-color: #fff;
  font-size: 1.3rem;
}

.input-wrapper {
  width: 100%;
  height: 7vh;
  padding: 0.5vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 9999;
}

.input-wrapper > .input {
  font-size: 1.3rem;
  width: 85%;
  height: 70%;
  border: none;
  border-bottom: 1px solid rgb(140, 140, 140);
}

.input-wrapper > .input:focus {
  outline: none;
}

.input-wrapper > .input:focus.input::-webkit-input-placeholder {
  visibility: hidden;
}

.input-wrapper > .input::-webkit-input-placeholder {
  color: rgb(184, 184, 184);
}

.back {
  color: rgb(50, 50, 50);
}

.scroll-wrapper {
  margin-top: 7vh;
  padding-bottom: 1px;
}
</style>