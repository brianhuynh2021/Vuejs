<template>
  <div class="weather-card">
    <h1>{{ weatherData.location }}</h1>
    <p>Temperature: {{ weatherData.temperature }}</p>
    <p>Humidity: {{ weatherData.humidity }}%</p>
    <p>Wind Speed: {{ weatherData.windSpeed }}</p>
  </div>
</template>

<script>
export default {
    props: ['weatherData']
}
</script>

<style>
    .weather-card {
        border: 1px solid #ccc;
        padding: 20px;
        width: 300px;
        margin: auto;
        text-align: center;
    }
</style>