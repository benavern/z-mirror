<template>
  <div class="wrapper">
    <div class="wrapper-corner top-left" v-show="topLeft"></div>
    <div class="wrapper-corner top-right" v-show="topRight"></div>
    <div class="wrapper-corner bottom-right" v-show="bottomRight"></div>
    <div class="wrapper-corner bottom-left" v-show="bottomLeft"></div>
    <div class="wrapper-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wrapper',
  props: {
    topLeft: {
      type: Boolean,
      default: false
    },
    topRight: {
      type: Boolean,
      default: false
    },
    bottomRight: {
      type: Boolean,
      default: false
    },
    bottomLeft: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/style'

  .wrapper
    position: relative
    padding: .5rem

    &.inline
      display: inline-block

    .wrapper-corner
      position: absolute

    .wrapper-content
      overflow: hidden
      position: relative
      height: 100%

</style>
