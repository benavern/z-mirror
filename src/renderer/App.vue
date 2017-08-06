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

  @import url('https://fonts.googleapis.com/css?family=Quicksand:300,400,700')

  *
    box-sizing: border-box
    margin: 0
    padding: 0

  html
    font-size: 20px

  body
    font-family: "Quicksand", sans-serif
    background-color: #000
    line-height: 1.3

</style>
