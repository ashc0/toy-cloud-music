<template>
  <div class="wrapperr">
    <div class="cover content">
      <img :src="song.coverurl" />
    </div>
    <div class="detail content">
      {{ song.name }}
    </div>

    <div class="control content">
      <div class="control-item" v-show="isPlaying" @click="pause">||</div>
      <div class="control-item" v-show="!isPlaying" @click="play">△</div>

      <div class="control-item">→</div>
      <div class="control-item">三</div>
    </div>

    <audio :src="song.url" ref="aud" style="visibility: none" autoplay></audio>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["song","isPlaying"])
  },

  
  methods: {
    pause() {
      this.$refs.aud.pause()
      this.$store.commit('pause')
    },
    play() {
      this.$refs.aud.play()

      this.$store.commit('play')
    }
  },
};
</script>

<style scoped>
.wrapperr {
  height: 7vh;
  width: 100%;
  border-radius: 3.5vh;
  position: fixed;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(222, 225, 253, 0.89);
}

.content {
  position: absolute;
  top: 50%;
  height: 6vh;
  overflow: hidden;
  transform: translateY(-50%);
}

.cover {
  left: 1vh;

  width: 6vh;

  border-radius: 50%;
}

.detail {
  left: 8vh;

  width: 20vh;

  overflow: hidden;
  line-height: 6vh;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.cover img {
  width: 100%;
}


.control {
  left: 30vh;
  width: 15vh;
  overflow: hidden;
}


.control-item {
  display: inline-block;
  width: 4vh;
  height: 6vh;
  line-height: 6vh;
}
</style>