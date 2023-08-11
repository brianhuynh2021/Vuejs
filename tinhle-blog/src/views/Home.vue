<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop Watching</button>

    <p>{{ tinhLeOne.name }} - {{ tinhLeOne.age }}</p>
    <button @click="updateTinhLeOne">Update TinhLe one</button>
    <h2>Reactive</h2>
    <p>{{  tinhLeTwo.name }} - {{ tinhLeTwo.age }} - {{ nameTwo }}</p>
    <button @click="updateTinhLeTwo">Update TinhLe two</button>
    <!-- <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">Add 1 to age</button>
    <input type="text" v-model="name"> -->
    <br />
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { computed, ref, reactive, watch, watchEffect } from 'vue'
import PostList from '../components/PostList.vue'
export default {
  name: 'Home',
  components: {PostList},
  setup() {
    const tinhLeOne = ref({ name: 'Mario', age: 30})
    const tinhLeTwo = reactive({ name: 'Luigi', age: 35})

    // const nameOne = ref('mario')
    const nameTwo = reactive('luigi')
    const updateTinhLeOne = () => {
      tinhLeOne.value.age = 32
    }

    const updateTinhLeTwo = () => {
      tinhLeTwo.age = 29
    }

    // const name =   computed(() => {
    //   return 'Tinh Le'
    // })
    const search = ref('')
    const names = ref(['abc', 'brian', 'son', 'seth', 'nam', 'nhu'])
    
    
    const matchingNames = computed(() =>{
      return names.value.filter((name)=>name.includes(search.value))
      })

    const stopWatch = watch(search, () => {
      console.log('watch function ran')
    })

    const stopEffect = watchEffect(() => {
      console.log('watchEffect function ran', search.value)
    })
    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    const posts = [
      {title: 'Journey to Europe', body: 'I started the journey to Europe', id: 1},
      {title: 'So good for a Vietnamese', body: 'Here how I go to Europe', id: 2},
    ]
    return { tinhLeOne, updateTinhLeOne, tinhLeTwo, 
      updateTinhLeTwo, nameTwo, names, search, matchingNames,
      handleClick, posts
    }
    // let name = ref('hello')
    // let age = ref(32)

    // const handleClick = () => {
    //  name.value = 'luigi'
    //  age.value = 35
    // }

    // return { name, age, handleClick }
  },
  data() {
    return {
      record: 5
    }
  }
}
</script>


<style>
.test {
  color: red;
}
</style>