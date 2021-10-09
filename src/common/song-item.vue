<template>
  <div class="container">
    <div class="index">
      <span>{{index+1}}</span>
    </div>
    <div class="song">
      <div class="name">{{name}}</div>
      <div class="origin">{{author}} - {{album}}</div>
    </div>
  </div>
</template>

<script>
export default {
props: ['index','song'],
computed: {
  album() {
    return this.song.album
  },
  author() {
    return this.song.author.join('/')
  },
  id() {
    return this.song.id
  },
  name() {
    return this.song.name
  }
}
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 3.6rem;
  box-sizing: border-box;
  padding: .5rem;
}
.index {
  height: 100%;
  width: 6%;
  font-size: 1rem;
  color: rgb(212, 212, 212);
  text-align: center;
  line-height: 0px;
  display: inline-block;
  position: relative;
  pointer-events: none;
}
.index span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.song {
  box-sizing: border-box;
  height: 100%;
  display: inline-block;
  width: 80%;
  margin-left: 2vw;
  padding: .2rem 0;
  pointer-events: none;
}

.name {
  font-size: .6rem;
  height: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: .2rem;
}

.origin {
  height: 50%;
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: .4rem;
  font-weight: 100;
}

</style>