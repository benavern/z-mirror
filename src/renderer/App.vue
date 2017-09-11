<template>
  <div id="app">
    <z-mirror></z-mirror>
  </div>
</template>

<script>
  import moment from 'moment'
  import ZMirror from '@/components/ZMirror'
  import { EventBus } from './eventBus.js'
  import Mousetrap from 'mousetrap'
  import { general as config } from '../config.json'
  import sound from './assets/bip.wav'

  export default {
    name: 'app',
    components: {
      ZMirror
    },
    data () {
      return {
        sound: new Audio(sound)
      }
    },
    mounted () {
      // moment
      moment.locale('fr')

      // event bus
      Mousetrap.bind('space', () => {
        if (config.sound) this.bip()
        EventBus.$emit('update:currentweather')
        EventBus.$emit('update:forecast')
        // EventBus.$emit('update:chucknorrisfacts')
        EventBus.$emit('update:shopping')
        EventBus.$emit('update:postit')
        EventBus.$emit('update:photos')
      })
      Mousetrap.bind('w', () => {
        if (config.sound) this.bip()
        EventBus.$emit('update:currentweather')
      })
      Mousetrap.bind('f', () => {
        if (config.sound) this.bip()
        EventBus.$emit('update:forecast')
      })
      Mousetrap.bind('c', () => {
        if (config.sound) this.bip()
        EventBus.$emit('update:chucknorrisfacts')
      })
      Mousetrap.bind('s', () => {
        if (config.sound) this.bip()
        EventBus.$emit('update:shopping')
      })
      Mousetrap.bind('p', () => {
        if (config.sound) this.bip()
        EventBus.$emit('update:postit')
      })
      Mousetrap.bind('a', () => {
        if (config.sound) this.bip()
        EventBus.$emit('update:photos')
      })
      Mousetrap.bind('left', () => {
        if (config.sound) this.bip()
        EventBus.$emit('update:photos:previous')
      })
      Mousetrap.bind('right', () => {
        if (config.sound) this.bip()
        EventBus.$emit('update:photos:next')
      })
    },
    methods: {
      bip () {
        this.sound.play()
      }
    }
  }
</script>

<style lang="sass">
  @import './styles/variables'
  @import './styles/fonts'

  *
    box-sizing: border-box
    margin: 0
    padding: 0

  html
    font-size: 20px

  body
    font-family: $font-custom
    background-color: $black
    line-height: 1.6

  .assets
    display: none

  .align-left
    text-align: left

  .align-center
    text-align: center

  .align-right
    text-align: right

  .font-normal
    font-family: $font-normal

  @each $key, $value in $colors
    .#{$key}
      color: $value
    .bg-#{$key}
      background-color: $value
    .border-#{$key}
      border-color: $value

</style>
