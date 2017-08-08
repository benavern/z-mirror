<template>
  <div>
    <current-weather></current-weather>
    <forecast></forecast>
  </div>
</template>

<script>
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'

export default {
  name: 'weather',
  components: {
    CurrentWeather,
    Forecast
  }
}
</script>
