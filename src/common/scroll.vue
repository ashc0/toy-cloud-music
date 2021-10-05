<template>
  <div class="wrapper" @touchmove="move" ref="sc">
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
    move() {
      if (!this.isRequesting) {
        if (
          this.$refs.sc.getBoundingClientRect().bottom <=
          window.innerHeight * 0.95
        ) {
          console.log(777);
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
  margin-bottom: 9vh;
  background-color: #eee;
}
</style>