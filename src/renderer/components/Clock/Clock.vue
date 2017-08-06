<template>
  <div id="clock">
    <div class="time">{{ time }}</div>
    <div class="date">{{ date }}</div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'clock',
    data () {
      return {
        time: '',
        date: '',
        clockTimer: null
      }
    },
    mounted () {
      this.$on('start', this.startClock)
      this.$on('stop', this.stopClock)

      this.updateClock()
      this.startClock()
    },
    methods: {
      updateClock () {
        const now = moment()
        console.log(now)
        this.time = now.format('HH:mm')
        this.date = now.format('dddd D MMM YYYY')
      },
      startClock () {
        this.clockTimer = setInterval(this.updateClock, 1000)
      },
      stopClock () {
        this.clockTimer = clearInterval(this.updateClock)
      }
    }
  }
</script>

<style lang="sass" scoped>
  #clock
    .time
      font-size: 3rem
      font-weight: lighter
    .date
      color: #ccc
</style>
