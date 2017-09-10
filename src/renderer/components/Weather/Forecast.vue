<template>
  <wrapper id="forecast" class="inline" top-left bottom-right>
    <table v-if="data.length" align="right">
      <tr>
        <th v-for="item in data" :key="item.dt">{{ item.day }}</th>
      </tr>
      <tr>
        <td v-for="item in data" :key="item.dt" class="icon">
          <i :class="['wi', `wi-owm-${item.icon}`]"></i>
        </td>
      </tr>
      <tr>
        <td v-for="item in data" :key="item.dt" class="temperature">
          &#708;&nbsp;{{ item.maxTemp }}°C
        </td>
      </tr>
      <tr>
        <td v-for="item in data" :key="item.dt" class="temperature">
          &#709;&nbsp;{{ item.minTemp }}°C
        </td>
      </tr>

    </table>
  </wrapper>
</template>

<script>
import moment from 'moment'
import { forecast as config } from '../../../config.json'
import { EventBus } from '../../eventBus.js'
import Wrapper from '../utils/Wrapper'

export default {
  name: 'forecast',
  components: { Wrapper },
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
  @import '../../styles/variables'

  #forecast
    margin-top: 1rem
    padding: 1rem

    table
      font-size: .8rem
      border-collapse: collapse

      td, th
        text-align: center
        padding: .1rem .3rem
        color: $gray

        &:not(:last-child)
          border-right: 1px dashed darken($gray, .5)

      th
        color: $primary
        font-weight: bolder

</style>
