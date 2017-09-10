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
  @import '../../styles/variables'

  .wrapper
    position: relative
    padding: .5rem
    border: 1px $gray solid
    border-radius: .3em
    background-color: rgba($gray, .1)

    &.inline
      display: inline-block

    .wrapper-corner
      position: absolute
      background-color: $black
      border-right: 1px $gray solid
      width: 2rem
      height: 2rem

      &.top-left
        top: -1rem
        left: -1rem
        transform: rotate(45deg)

      &.top-right
        top: -1rem
        right: -1rem
        transform: rotate(135deg)

      &.bottom-right
        bottom: -1rem
        right: -1rem
        transform: rotate(225deg)

      &.bottom-left
        bottom: -1rem
        left: -1rem
        transform: rotate(315deg)

    .wrapper-content
      overflow: hidden
      position: relative
      height: 100%

</style>
