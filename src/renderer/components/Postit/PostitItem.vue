<template>
  <div :class="['list-item', {'done': item.done}]">
    <div class="text">{{ item.text }}</div>
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
  border: 2px solid #999
  padding: 1rem 1rem .5rem
  margin: .5rem .5rem 0 0
  background-color: rgba(#fff, .1)

  .date
    color: #999
    font-size: .3rem

</style>
