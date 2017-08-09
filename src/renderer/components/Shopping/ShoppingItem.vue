<template>
  <div :class="['list-item', {'done': item.done}]">
    <span class="text">{{ item.item }}</span>
    <span v-if="!item.done" class="icon">&#9744;</span>
    <span v-if="item.done" class="icon">&#9745;</span>
  </div>
</template>

<script>
export default {
  name: 'shoppingItem',
  props: ['item']
}
</script>

<style lang="sass" scoped>
.list-item
  max-width: 400px

  .icon
    font-weight: bold
    margin-left: .5em

  &.done
    .text
      text-style: crossed
      font-style: italic

</style>
