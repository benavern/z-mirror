<template>
  <transition name="slide">
    <div v-show="show" class="image-item">
      <div :class="['image-container', { 'image-with-title': !!title }]">
        <img :src="url">
        <div v-if="title" class="image-title font-cursive">
          {{ title }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'photo-item',
  props: ['url', 'title', 'show']
}
</script>

<style lang="sass">
  .slide-enter-active
    transition: all 1s ease

  .slide-leave-active
    transition: all 1s ease

  .slide-enter,
    transform: translateX(-100%)
    opacity: 0

  .slide-leave-to
    transform: translateX(100%)
    opacity: 0

  .image-item
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%

  .image-container
    position: relative
    display: inline-block
    width: auto
    height: 95%
    border: .5rem solid white

    &.image-with-title
      border-bottom-width: 3.5rem

    img
      display: block
      position: relative
      height: 100%
      width: auto

    .image-title
      position: absolute
      left: 0
      bottom: -3rem
      width: 100%
      padding: .5rem 1rem
      line-height: 1
      text-align: center
      color: #000
      transform: rotate(-3deg)
      font-size: 1.2rem
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis

</style>
