<template>
  <div class="wrapper" @touchmove="touchmove" ref="sc">
    <slot />
  </div>
</template>

<script>
import throttle from "../utils/throttle";
export default {
  data() {
    return {
      touchmove: throttle(this.move, 100),
    };
  },
  methods: {
    move() {
      if (!this.isRequesting) {
        if (
          this.$refs.sc.getBoundingClientRect().bottom <=
          window.innerHeight * 0.95
        ) {
          this.$emit("getMore");
        }
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  margin-top: 10px;
  margin-bottom: 7vh;
  background-color: #eee;
}
</style>