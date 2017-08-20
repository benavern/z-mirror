<template>
  <div id="wrapper">
    <div class="region top left">
      <clock></clock>
    </div>

    <div class="region top right align-right">
      <weather></weather>
    </div>

    <div class="region middle left">
      <postit></postit>
    </div>

    <div class="region middle right align-right">
      <shopping></shopping>
    </div>

    <div class="region bottom full">
       <!-- <chuck-norris-facts></chuck-norris-facts> -->
       <photos></photos>
    </div>
  </div>
</template>

<script>
  import Clock from './Clock/Clock'
  import Weather from './Weather/Weather'
  import Shopping from './Shopping/Shopping'
  import Postit from './Postit/Postit'
  import Photos from './Photos/Photos'

  export default {
    name: 'z-mirror',
    components: {
      Clock,
      Weather,
      Shopping,
      Postit,
      Photos
    }
  }
</script>

<style lang="sass" scoped>
  $horizontal: 2
  $vertical: 3

  #wrapper
    width: 100vw
    height: 100vh
    overflow: hidden
    color: #fff
    display: relative

    .region
      position: absolute
      width: 100% / $horizontal
      height: 100% / $vertical
      padding: 1rem

      &.top
        top: 0
      &.middle
        top: 100% / $vertical
      &.bottom
        // top: 2 * 100% / $vertical
        bottom: 0

      &.left
        left: 0
      &.center
        left: 100% / 2 / $horizontal
      &.right
        // left: 100% / $horizontal
        right: 0

      &.full
        left: 0!important
        width: 100%

</style>
