<template>
  <div class="postit-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'postitItem',
  props: ['done']
}
</script>

<style lang="sass" scoped>
.postit-item
  order: 0
  flex: 0 1 auto
  align-self: auto
  width: 50%
  padding: 1rem
  margin: .5rem .5rem 0 0
  background-color: rgba(#fff, .2)
  border-radius: .3em
  box-shadow: 0 0 .5rem rgba(#fff, .5)

</style>
