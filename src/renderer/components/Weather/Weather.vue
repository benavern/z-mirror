<template>
  <div>
    <current-weather></current-weather>
  </div>
</template>

<script>
import currentWeather from './currentWeather'

export default {
  name: 'weather',
  components: {
    currentWeather
  }
}
</script>
