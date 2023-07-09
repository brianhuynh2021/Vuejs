<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start">play</button>
  <Block v-if="isPlaying" :delay="delay"/>
</template>

<script>
import Block from './components/Block.vue'
export default {
  name: 'App',
  components: { Block },
  data() {
    return {
    isPlaying: false,
    delay: null
     }
  }, 
  methods: {
    start() {
      this.deplay = 2000 + Math.random() * 5000,
      this.isPlaying = true,
      console.log(this.deplay)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
