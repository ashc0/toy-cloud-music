<template>
  <div class="footer">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer {
  position: absolute;
  bottom: 0;
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid #999;
}
</style>