<template>
  <div id="current-weather">
    <div class="big-temp">
      <i :class="['icon', 'owf', `owf-${icon}-${iconSuffix}`]"></i>
      <span class="temperature">{{ temp }}</span>°C
    </div>
    <div class="location">{{ location }}</div>
    <div class="min-max">
      <span class="min">&#9660; {{ mintemp }}°C</span>
      &nbsp;
      <span class="max">&#9650; {{ maxtemp }}°C</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'currentWeather',
  data () {
    return {
      apikey: '1d616f35aa933bb39712bd855cb7d0c6',
      location: 'Vern-sur-Seiche',
      temp: '...',
      icon: '950',
      iconSuffix: 'd',
      mintemp: '...',
      maxtemp: '...',
      now: null,
      weatherTimer: null
    }
  },
  mounted () {
    this.getWeather()
    this.weatherTimer = setInterval(this.getWeather, 60 * 60 * 1000) // 1h
  },
  methods: {
    getWeather () {
      this.now = moment().unix()
      this.$http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.apikey}&units=metric`)
        .then(res => {
          if (res.data) {
            const obj = res.data
            this.temp = obj.main.temp
            this.mintemp = obj.main.temp_min
            this.maxtemp = obj.main.temp_max
            this.icon = obj.weather[0].id
            this.iconSuffix = (this.now > obj.sys.sunrise && this.now < obj.sys.sunset) ? 'd' : 'n'
          }
        })
    }
  }
}
</script>

<style lang="sass" scoped>
  #current-weather
    .big-temp
      font-size: 3rem
      .icon
        margin-right: 1rem

      .temperature
        font-weight: bold

    .location
      color: #ccc

    .min-max
      color: #eee
      font-size: 1.5rem
</style>
