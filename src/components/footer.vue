<template>
  <div class="footer">
    <slot />
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid #999;
  background-color: #fff;
}
</style>