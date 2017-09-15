<template>
  <transition name="slide">
    <div v-show="show" class="image-item">
      <wrapper class="image-wrapper inline" top-left bottom-right>

        <div :class="['image-container', { 'image-with-title': !!title }]">
          <img :src="url">
        </div>

        <div slot="footer" v-if="title" class="image-title font-normal">
          {{ title }}
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

    .image-wrapper
      height: 100%

      .image-container
        position: relative
        display: inline-block
        width: auto
        height: 100%

        img
          display: block
          position: relative
          height: 100%
          width: auto


    .image-title
      padding: 0 1em
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis

</style>
