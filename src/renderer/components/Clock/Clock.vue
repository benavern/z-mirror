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
        now: null,
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
        this.now = moment()
        this.time = this.now.format('HH:mm')
        this.date = this.now.format('dddd D MMM YYYY')
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
      font-size: 5rem
      font-weight: lighter
    .date
      color: #ccc
</style>
