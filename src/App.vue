<template>
  <div id="app">
    <main-header />
    <router-view />
    <main-footer>
      <router-link to="/">首页</router-link>
      <router-link to="/rank">排行</router-link>
      <router-link to="/singer">歌手</router-link>
      <router-link to="/search">搜索</router-link>
    </main-footer>
  </div>
</template>

<script>
import header from "@/components/header.vue";
import footer from "@/components/footer.vue";
export default {
  components: {
    mainHeader: header,
    mainFooter: footer,
  }
};
</script>

<style>
.link-wrapper {
  border: 1px solid #eee;
}
a {
  color: #000;
  text-decoration: none;
}
.router-link-exact-active {
  color: rgb(245, 65, 65);
}
</style>