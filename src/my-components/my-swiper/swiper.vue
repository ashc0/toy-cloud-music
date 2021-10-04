<template>
  <div class="wrapper">
    <div class="slide-wrapper" ref="swiper">
      <transition-group name="aaa" tag="div" class="tc">
        <slide v-for="(item, idx) in img" :key="item" v-show="idx === curIdx">
          <img :src="item"/>
        </slide>
      </transition-group>
    </div>
  </div>
</template>

<script>
import slide from "./slide.vue";
export default {
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    img: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      curIdx: 0,
      down: false,
      opt: {},
    };
  },
  components: {
    slide,
  },
  computed: {
    array() {
      let len = this.$slots.default.length;
      return this.$slots.default
        .concat(this.$slots.default[0])
        .concat(this.$slots.default[len - 1]);
    },
  },
  created() {
    this.opt = Object.assign(
      {
        gdpl: "2000",
        rollSpeed: "350",
        isAuto: true,
      },
      this.options
    );
  },
  methods: {
    // 初始化 swiper
    init() {
      this.opt.isAuto && this.autoCircle();
    },

    // 自动滚动
    autoCircle() {
      this.timerId = setInterval(() => {
        // if (this.curIdx === this.img.length - 1) {
        //   this.curIdx = 0;
        // } else 
        this.curIdx = (this.curIdx+1)%(this.img.length);
        console.log(this.curIdx);
      }, this.opt.gdpl);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  beforeDestroy() {
    this.timerId && clearInterval(this.timerId);
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  overflow: hidden;
}

.tc {
  position: relative;
  overflow: hidden;
  height: 300px;
}

.aaa-enter-active {
  transition: all 1s ease;
}

.aaa-leave-active {
  transition: all 1s ease;
}

.aaa-enter {
  transform: translateX(100%);
}

.aaa-leave-to {
  transform: translateX(-100%);
}
</style>