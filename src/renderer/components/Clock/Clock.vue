<template>
  <div id="clock">
    <div class="time">
      {{ time }}
      <span class="seconds" ng-if="showSeconds">{{ seconds }}</span>
    </div>
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
        seconds: '',
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
        this.seconds = this.now.format('ss')
        this.date = this.now.format('dddd D MMM YYYY')
      },
      startClock () {
        this.clockTimer = setInterval(this.updateClock, 1000)
      },
      stopClock () {
        clearInterval(this.clockTimer)
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../../styles/variables'

  #clock
    padding: 1rem 0
    .time
      position: relative
      display: inline-block
      font-size: 5rem
      line-height: 1
      margin: 1rem 0

      .seconds
        position: absolute
        left: calc(100% + 10px)
        top: 0
        font-size: 2rem
        color: $primary

    .date
      color: $gray
</style>
