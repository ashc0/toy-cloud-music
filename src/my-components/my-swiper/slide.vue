<template>
  <div class="slide-wrapper">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.slide-wrapper {
  display: inline-block;
  position: absolute
}

.slide-wrapper img{
  width: 100vw;
}
</style>