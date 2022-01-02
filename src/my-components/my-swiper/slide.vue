<template>
  <div class="slide-wrapper">
    <slot />
  </div>
</template>

<style scoped>
.slide-wrapper {
  display: inline-block;
  position: absolute;
  will-change: transform;
}

.slide-wrapper img {
  width: 100vw;
}
</style>