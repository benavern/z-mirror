<template>
  <div :class="['list-item', {'done': item.done}]">
    <span class="text">{{ item.item }}</span>
  </div>
</template>

<script>
export default {
  name: 'shoppingItem',
  props: ['item']
}
</script>

<style lang="sass" scoped>
@import '../../styles/style'

.list-item
  min-width: 100px
  max-width: 400px

</style>
