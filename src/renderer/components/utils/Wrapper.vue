<template>
  <div :class="['wrapper', {'with-header': !!$slots.header}, {'with-footer': !!$slots.footer}]">
    <div class="wrapper-corner top-left" v-show="topLeft"></div>
    <div class="wrapper-corner top-right" v-show="topRight"></div>
    <div class="wrapper-corner bottom-right" v-show="bottomRight"></div>
    <div class="wrapper-corner bottom-left" v-show="bottomLeft"></div>
    <div class="wrapper-content">

      <div class="wrapper-header" v-show="$slots.header">
        <slot name="header"></slot>
      </div>

      <div class="wrapper-body">
        <slot></slot>
      </div>

      <div class="wrapper-footer" v-show="$slots.footer">
        <slot name="footer"></slot>
      </div>

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

  $header-height: 3rem
  $footer-height: 2.5rem

  .wrapper
    position: relative

    &.inline
      display: inline-block

    &.with-header
      padding-top: $header-height

    &.with-footer
      padding-bottom: $footer-height


    .wrapper-corner
      position: absolute

    .wrapper-content
      position: relative
      height: 100%

      .wrapper-body
        overflow: hidden
        height: 100%

      .wrapper-header
        position: absolute
        top: -$header-height
        left: 0
        right: 0
        line-height: $header-height
        height: $header-height
        font-weight: bold

      .wrapper-footer
        position: absolute
        bottom: -$footer-height
        left: 0
        right: 0
        line-height: $footer-height
        height: $footer-height


</style>
