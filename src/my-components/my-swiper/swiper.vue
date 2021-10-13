<template>
  <div class="wrapper">
    <div
      class="slide-wrapper"
      @touchstart="start"
      @touchmove="move"
      @touchend="end"
    >
      <div class="tc">
        <slide
          v-for="(item, idx) in img"
          :key="item"
          v-show="idx === curIdx || idx === prevIdx || idx === nextIdx"
          :class="{ prev: idx === prevIdx, next: idx === nextIdx, tran: tran }"
          :style="{
            transform:
              idx === curIdx
                ? `translateX(${moveDtc}px)`
                : idx === prevIdx
                ? `translateX(${moveDtc - viewWidth}px)`
                : idx === nextIdx
                ? `translateX(${moveDtc + viewWidth}px)`
                : '',
          }"
        >
          <img :src="item" />
        </slide>
      </div>
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
      prevIdx: this.img.length - 1,
      nextIdx: 1,
      opt: {},
      timerId: 0,
      tran: true, // 在滑动时 应取消过渡
      startX: 0,
      moveX: 0,
    };
  },
  components: {
    slide,
  },
  computed: {
    // 移动距离。
    moveDtc() {
      return this.moveX - this.startX;
    },
    // 视口宽度
    viewWidth() {
      return window.innerWidth;
    },

    // 如果大于此距离，则满足跳转下一条的落点条件
    toNextLocation() {
      return this.viewWidth / 3;
    },

    // 如果小于此距离，则满足跳转上一条的落点条件
    toPrevLocation() {
      return (this.viewWidth * 2) / 3;
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
        this.changeIdx(this.curIdx);
      }, this.opt.gdpl);
    },

    // 根据当前下标 修改下次轮换的三元组下标
    changeIdx(curIdx) {
      this.prevIdx = curIdx;
      this.curIdx = (curIdx + 1) % this.img.length;
      this.nextIdx = (curIdx + 2) % this.img.length;
    },

    // 开始按下
    start(e) {
      this.tran = false; // 按下之后取消过渡动画

      clearInterval(this.timerId); // 清楚定时器

      this.startX = e.touches[0].pageX; // 记录开始坐标
      this.moveX = e.touches[0].pageX;
    },

    // 滑动
    move(e) {
      this.moveX = e.touches[0].pageX; // 记录移动时坐标
    },

    // 抬起
    end(e) {
      this.tran = true; // 抬起之后开启过渡动画
      let state = this.getState(e.changedTouches[0].pageX); // 这三行作用是判断切换到前一张还是后一张或是不切换
      if (state === "next") this.changeIdx(this.curIdx);
      if (state === "prev")
        this.changeIdx((this.curIdx + this.img.length - 2) % this.img.length);
      this.autoCircle(); // 开启自动轮播
      this.moveX = 0; // 初始化坐标
      this.startX = 0;
    },

    // 获取下一状态，上一张/下一张/此张
    getState(location) {
      // 判断是否需要轮换。如果移动距离不超过三分之一屏幕，则不轮换
      if (Math.abs(this.moveDtc) <= this.viewWidth / 3) {
        return "cur";
      }
      return location > this.toNextLocation ? "prev" : "next";
    },
    isNext(location) {
      return location > this.toNextLocation;
    },
    isPrev(location) {
      return location < this.toPrevLocation;
    },

    // 由于手动滑动和自动滑动用的都是 transform，手动滑动的行内样式会覆盖原来的transform。
    // 用于图片分开的transform失效后会导致图片重叠一起，于是根据下标来设置不同的transform
    transf(idx) {
      let sty = { transform: `translateX(${this.moveDtc}px)` };
      if (idx === this.prevIdx)
        sty.transform = `translateX(${this.moveDtc - this.viewWidth}px)`;
      if (idx === this.nextIdx)
        sty.transform = `translateX(${this.moveDtc + this.viewWidth}px)`;
      return sty;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  beforeDestroy() {
    // 清楚定时器
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
  height: 39vw;
}

.prev {
  transform: translateX(-100%);
}

.next {
  transform: translateX(100%);
}

.tran {
  transition: transform 1s ease;
}
</style>