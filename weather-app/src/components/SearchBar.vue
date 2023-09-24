<template>
  <div class="search-bar">
    <input type="text" v-model="location" placeholder="Enter location" />
    <button @click="searchWeather">Search</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            location: ''
        }
    },
    method: {
        searchWeather() {
            this.$emit('search', this.location)
        }
    }
}
</script>

<style>
    .search-bar {
        display: flex;
        justify-content: center;
        margin: 20px;
    }
</style>