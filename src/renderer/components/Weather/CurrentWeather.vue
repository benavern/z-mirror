<template>
  <div id="current-weather" v-if="loaded">
    <div class="big-temp">
      <i :class="['icon', 'wi', `wi-owm-${iconPeriod}-${icon}`]"></i>
      <span class="temperature">{{ temp }}</span>°C
    </div>
    <div class="location">{{ location }}</div>
  </div>
</template>

<script>
import moment from 'moment'
import { weather as config } from '../../../config.json'
import { EventBus } from '../../eventBus.js'

export default {
  name: 'currentWeather',
  data () {
    return {
      url: config.api.baseUrl + `?q=${config.location}&units=${config.units}&appid=${config.api.key}`,
      now: null,
      weatherTimer: null,
      location: config.location,
      loaded: false,
      temp: 0,
      icon: config.defaultIcon,
      iconPeriod: 'day'
    }
  },
  mounted () {
    EventBus.$on('update:currentweather', this.getWeather)
    this.weatherTimer = setInterval(this.getWeather, config.updateInterval || (60 * 60 * 1000))
    this.getWeather()
  },
  methods: {
    getWeather () {
      console.log('[GET] current weather')
      this.now = moment().unix()
      this.$http.get(this.url)
        .then(res => {
          if (res.data) {
            const obj = res.data
            this.temp = obj.main.temp
            this.icon = obj.weather[0].id
            this.iconPeriod = (this.now > obj.sys.sunrise && this.now < obj.sys.sunset) ? 'day' : 'night'
            this.loaded = true
          }
        })
        .catch(() => { console.log('[CURRENT WEATHER] FETCH ERROR') })
    }
  }
}
</script>

<style lang="sass" scoped>
  #current-weather
    .big-temp
      font-size: 3rem
      .icon
        margin-right: .3em

      .temperature
        font-weight: bold

    .location
      color: #ccc
</style>
