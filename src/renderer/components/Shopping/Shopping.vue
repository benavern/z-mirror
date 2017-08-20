<template>
  <div id="shopping" v-if="list.length">
    <h3>Liste de courses</h3>
    <div class="list">
      <shopping-item v-for="(item, index) in orderedList"
                      :key="index"
                      :item="item">
      </shopping-item>
    </div>
  </div>
</template>

<script>
import ShoppingItem from './ShoppingItem'
import { shopping as config } from '../../../config.json'
import { EventBus } from '../../eventBus.js'

export default {
  name: 'shopping',
  components: { ShoppingItem },
  data () {
    return {
      list: [],
      shoppingTimer: null
    }
  },
  computed: {
    orderedList () {
      return this.list.sort((a, b) => a.id > b.id)
    }
  },
  mounted () {
    EventBus.$on('update:shopping', this.getShopping)
    this.shoppingTimer = setInterval(this.getShopping, config.updateInterval || (60 * 60 * 1000)) // 1h
    this.getShopping()
  },
  methods: {
    getShopping () {
      console.log('[GET] shopping list')
      this.$http.get(config.api.baseUrl)
        .then(res => {
          if (res.data) {
            this.list = res.data.data
          }
        })
        .catch((err) => { console.error('[SHOPPING] FETCH ERROR', err) })
    }
  }
}
</script>

<style lang="sass" scoped>
  #shopping
    font-size: .6rem
    display: inline-block
    border: 1px dotted #ccc
    border-radius: .5em
    padding: 1rem 1rem

    .list
      margin: 1em .3em
</style>
