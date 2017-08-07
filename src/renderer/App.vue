<template>
  <div id="app">
    <z-mirror></z-mirror>
  </div>
</template>

<script>
  import moment from 'moment'
  import ZMirror from '@/components/ZMirror'

  export default {
    name: 'app',
    components: {
      ZMirror
    },
    mounted () {
      moment.locale('fr')
    }
  }
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Quicksand:300,400,700|Sue+Ellen+Francisco')

  $font-sans-serif: "Quicksand", sans-serif
  $font-cursive: 'Sue Ellen Francisco', cursive

  *
    box-sizing: border-box
    margin: 0
    padding: 0

  html
    font-size: 20px

  body
    font-family: $font-sans-serif
    background-color: #000
    line-height: 1.6

  .align-left
    text-align: left
  .align-center
    text-align: center
  .align-right
    text-align: right

  .font-sans-serif
    font-family: $font-sans-serif
  .font-cursive
    font-family: $font-cursive

</style>
