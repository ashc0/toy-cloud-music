<template>
  <div class="main-wrapper" v-if="trackQueue.length">
    <div class="wrapperr">
      <div class="cover content">
        <img
          :src="
            song.coverurl
              ? song.coverurl
              : 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fa29f11ce5db6c9c45313db2bb420f7280b1ee770.png&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636368013&t=c0d02d0dc9dbe765e33a8aba83fc2a04'
          "
        />
      </div>
      <div class="detail content">
        {{ song.name }}
      </div>

      <div class="control content">
        <div class="control-item" v-show="isPlaying" @click="pause">||</div>
        <div class="control-item" v-show="!isPlaying" @click="play">▷</div>

        <div class="control-item" @click="toNextSong">▶|</div>
        <div class="control-item" @click="changeBroadcastListShow">☰</div>
      </div>

      <audio :src="url" ref="aud" style="visibility: none" @ended="end"></audio>
    </div>
    <transition name="list">
      <broadcast-list v-show="isBroadcastListShow" />
    </transition>
    <transition name="mask">
      <div
        class="mask"
        v-show="isBroadcastListShow"
        @click="changeBroadcastListShow"
        @touchmove.prevent
      ></div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import broadcastList from "./broadcast-list.vue";

export default {
  components: { broadcastList },
  data() {
    return {
      isBroadcastListShow: false,
      csong: {
        coverurl: "",
        name: "",
        author: "",
        url: "",
      },
      url: "",
      log: ''
    };
  },
  computed: {
    ...mapState(["song", "isPlaying", "trackQueue"]),
  },

  methods: {
    ...mapMutations(["pause", "play", "toNextSong"]),

    end() {
      this.pause();
    },
    changeBroadcastListShow() {
      this.isBroadcastListShow = !this.isBroadcastListShow;
    }
  },

  watch: {
    isPlaying(n) {
      this.$nextTick(() => {
        if (n) this.$refs.aud.play();
        else this.$refs.aud.pause();
      });
    },

    song(n) {
      this.$api.getSongUrl(n.id).then((res) => {
        this.url = res.data.data[0].url;
        this.play();
      });
    },
  },

  created() {
    this.$api.getSongUrl(this.song.id).then((res) => {
      this.url = res.data.data[0].url;
    }).catch(err => {
      this.log = err
    });
  },
};
</script>

<style scoped>
.main-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99999;
}
.wrapperr {
  height: 7vh;
  width: 100%;
  border-radius: 3.5vh;
  position: fixed;
  bottom: 0;

  background-color: rgba(222, 225, 253);
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

.mask {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.list-enter {
  transform: translateY(100%);
}

.list-enter-active {
  transition: transform 0.3s ease-in;
}

.list-leave-to {
  transform: translateY(100%);
}

.list-leave-active {
  transition: transform 0.3s ease-out;
}
.mask-enter {
  opacity: 0;
}

.mask-leave-to {
  opacity: 0;
}

.mask-enter-active {
  transition: opacity 0.3s ease;
}

.mask-leave-active {
  transition: opacity 0.3s ease;
}
</style>