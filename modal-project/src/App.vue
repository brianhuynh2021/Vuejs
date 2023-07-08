<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
  <teleport to=".modals" v-if="showModal">
    <!-- <Modal :header="header" :text="text" ok=123 theme="sale" @close="toggleModal"/> -->
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja Givaway!</h1>
      <p>Grab your ninja swag for half price </p>
    </Modal>
  </teleport>
  <!-- <div v-if="showModal">
  <Modal :header="header" :text="text" ok=123 theme="sale" @close="toggleModal"/>
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja Givaway!</h1>
      <p>Grab your ninja swag for half price </p>
    </Modal>
  </div> -->
  <div v-if="showModalTwo">
    <!-- <Modal :header="header" :text="text" ok=123 theme="sale" @close="toggleModal"/> -->
    <Modal theme="sale" @close="toggleModalTwo">
      <template v-slot:links>
        <a href="#">sign up ModalTwo now</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja Givaway!</h1>
      <p>Grab your ninja swag for half price </p>
    </Modal>
  </div>
  <button @click.shift="toggleModal">open modal (shift)</button>
  <button @click="toggleModalTwo">click to open Modal Two</button>
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
      // header: 'Sign up for giveaway!',
      // text: 'Hello world',
      showModal: false,
      showModalTwo: false
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
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style >
#app, .modals {
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
