<template>
  <div id="wrapper">
    <clock></clock>
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
  #wrapper
    width: 100vw
    height: 100vh
    overflow: hidden
    color: #fff
</style>
