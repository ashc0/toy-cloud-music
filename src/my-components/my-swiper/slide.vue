<template>
  <div class="slide-wrapper">
    <slot />
  </div>
</template>

<style scoped>
.slide-wrapper {
  display: inline-block;
  position: absolute;
}

.slide-wrapper img {
  width: 100vw;
}
</style>