<template>
  <div id="app">
    <SearchBar @search="fetchWeather"/>
    <WeatherCard :weatherData="weatherData"/>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import WeatherCard from './components/WeatherCard.vue'

export default {
  components: {
    SearchBar,
    WeatherCard
  },
  data() {
    return {
      weatherData: {
      location: 'New York',
      temperature: 25,
      humidity: 70,
      windSpeed: 10
      }
    };
  },
  methods: {
    fetchWeather(location) {
      this.weatherData.location = location
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
  color: #2c3e50;
  margin-top: 60px;
}


body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

</style>
