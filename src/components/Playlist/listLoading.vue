<template>
  <div id="wrapper">
    <div class="content">加载中</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
  height: 68vh;
  position: relative;
}

.content {
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
color: red;
font-size: 2rem;
font-weight: bold;
}
</style>