<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
  <div v-if="showModal">
    <!-- <Modal :header="header" :text="text" ok=123 theme="sale" @close="toggleModal"/> -->
    <Modal theme="sale" @close="toggleModal">
      <h1>Ninja Givaway!</h1>
      <p>Grab your ninja swag for half price </p>
    </Modal>
  </div>
  <button @click.shift="toggleModal">open modal (shift)</button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data () {
    return {
      title: 'My first Vue App fdf:)',
      header: 'Sign up for giveaway!',
      text: 'Hello world',
      showModal: false
    }
  },
  methods: {
    handleClick () {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
        this.showModal = !this.showModal
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #62717f;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
