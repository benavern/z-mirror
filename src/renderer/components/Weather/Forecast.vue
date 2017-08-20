<template>
  <table id="forecast" v-if="data.length" align="right">
    <tr>
      <th v-for="item in data" :key="item.dt">{{ item.day }}</th>
    </tr>
    <tr>
      <td v-for="item in data" :key="item.dt">
        <i :class="['icon','wi', `wi-owm-${item.icon}`]"></i>
      </td>
    </tr>
    <tr>
      <td v-for="item in data" :key="item.dt">
        <span class="temperature">&#9660; {{ item.minTemp }}</span>°C
      </td>
    </tr>
    <tr>
      <td v-for="item in data" :key="item.dt">
        <span class="temperature">&#9650; {{ item.maxTemp }}</span>°C
      </td>
    </tr>

  </table>
</template>

<script>
import moment from 'moment'
import { forecast as config } from '../../../config.json'
import { EventBus } from '../../eventBus.js'

export default {
  name: 'forecast',
  data () {
    return {
      url: config.api.baseUrl + `?q=${config.location}&cnt=${config.limit}&units=${config.units}&appid=${config.api.key}`,
      forecastTimer: null,
      location: config.location,
      data: []
    }
  },
  mounted () {
    EventBus.$on('update:forecast', this.getForecast)
    this.forecastTimer = setInterval(this.getForecast, config.updateInterval || (60 * 60 * 1000))
    this.getForecast()
  },
  methods: {
    getForecast () {
      console.log('[GET] Forecast')
      this.$http.get(this.url)
        .then(res => {
          if (res.data) {
            this.data = res.data.list.map(d => {
              return {
                dt: d.dt,
                day: moment.unix(d.dt).format('ddd'),
                minTemp: Math.round(d.temp.min),
                maxTemp: Math.round(d.temp.max),
                icon: d.weather[0].id
              }
            })
          }
        })
        .catch(() => { console.log('[CURRENT WEATHER] FETCH ERROR') })
    }
  }
}
</script>

<style lang="sass" scoped>
  #forecast
    margin-top: 1.5rem
    font-size: .8rem
    td, th
      text-align: center
      padding: 0 .3rem

    th
      font-weight: bold

    .icon
      margin: .5em
</style>
