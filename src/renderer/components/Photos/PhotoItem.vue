<template>
  <transition name="slide">
    <div v-show="show" class="image-item">
      <wrapper class="image-container inline" top-left bottom-right>
        <div :class="['image-container', { 'image-with-title': !!title }]">
          <img :src="url">
          <div v-if="title" class="image-title font-normal">
            {{ title }}
          </div>
        </div>
      </wrapper>
    </div>
  </transition>
</template>

<script>
import Wrapper from '../utils/Wrapper'

export default {
  name: 'photo-item',
  components: { Wrapper },
  props: ['url', 'title', 'show']
}
</script>

<style lang="sass" scoped>
  @import '../../styles/style'

  #photos
    .image-item
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%

    .wrapper
      padding: 0

    .image-container
      position: relative
      display: inline-block
      width: auto
      height: 100%

      &.image-with-title
        padding-bottom: 2.5rem

      img
        display: block
        position: relative
        height: 100%
        width: auto

      .image-title
        position: absolute
        left: 0
        bottom: 0
        width: 100%
        padding: 0 1rem
        line-height: 2.5rem
        text-align: center
        font-size: .7em
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis

</style>
