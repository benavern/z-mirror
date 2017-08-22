<template>
  <div id="wrapper">
    <div class="region line-1 column-1">
      <clock></clock>
    </div>

    <div class="region line-1 column-2 align-right">
      <weather></weather>
    </div>

    <div class="region line-2 column-1 height-2">
      <postit></postit>
    </div>

    <div class="region line-2 column-2 height-2 align-right">
      <shopping></shopping>
    </div>

    <div class="region line-4 width-2">
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
  $vertical: 4

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

      @for $i from 1 through $vertical
        &.line-#{$i}
          top: 100% * ($i - 1) / $vertical
        &.height-#{$i}
          height: 100% * $i / $vertical

      @for $j from 1 through $horizontal
        &.column-#{$j}
          left: 100% / ($j - 1) / $horizontal
        &.width-#{$j}
          width: 100% * $j / $horizontal
</style>
