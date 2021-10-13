<template>
    <div class="list-container">
      <div class="list-item" v-for="item in trackQueue" :key="item.id">
        ♪ {{ item.author }} - {{ item.name }}
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['trackQueue'])
  }
};
</script>

<style scoped>
.list-container {
  width: 100%;
  max-height: 30vh;
  overflow-y: scroll;
  position: fixed;
  bottom: 7vh;
  background-color: #fff;
}

.list-item {
  height: 8vh;
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px;
  border-bottom: 1px solid;
}
</style>