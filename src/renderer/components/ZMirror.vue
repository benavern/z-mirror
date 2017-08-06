<template>
  <div id="wrapper">
    <div class="region top-left">
      <clock></clock>
    </div>
    <div class="region top-right"></div>
    <div class="region middle-left"></div>
    <div class="region middle-right"></div>
    <div class="region bottom-left"></div>
    <div class="region bottom-right"></div>
  </div>
</template>

<script>
  import Clock from './Clock/Clock'

  export default {
    name: 'z-mirror',
    components: { Clock }
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
      // ##### Debug ####
      border: 1px solid pink

      &.top-left
        top: 0
        left: 0
      &.top-right
        top: 0
        left: 100% / $horizontal

      &.middle-left
        top: 100% / $vertical
        left: 0
      &.middle-right
        top: 100% / $vertical
        left: 100% / $horizontal
        
      &.bottom-left
        top: 2 * 100% / $vertical
        left: 0
      &.bottom-right
        top: 2 * 100% / $vertical
        left: 100% / $horizontal
      
</style>
