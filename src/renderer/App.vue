<template>
  <div id="app">
    <z-mirror></z-mirror>
  </div>
</template>

<script>
  import ZMirror from '@/components/ZMirror'

  export default {
    name: 'zmirror',
    components: {
      ZMirror
    }
  }
</script>

<style lang="sass">
  *
    box-sizing: border-box
    margin: 0
    padding: 0

  body 
    font-family: sans-serif
    background-color: #000

</style>
