<template>
  <div :class="['list-item', {'done': item.done}]">
    <div class="text">{{ item.text }}</div>
    <slot></slot>
    <div class="date align-right">{{ date }}</div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'postitItem',
  props: ['item'],
  computed: {
    date () {
      return moment.unix(this.item.dt).format('DD/MM/YYYY')
    }
  }
}
</script>

<style lang="sass" scoped>
.list-item
  order: 0
  flex: 0 1 auto
  align-self: auto
  width: 50%
  // border: 2px solid #999
  padding: 1rem 1rem .5rem
  margin: .5rem .5rem 0 0
  background-color: rgba(#fff, .2)

  .date
    color: #999
    font-size: .4rem

</style>
