<template>
  <div >
    <wrapper id="shopping"
             class="inline"
             v-if="list.length"
             top-right
             bottom-left>
      <h3 class="title">Liste de courses</h3>
      <div class="list font-normal">
        <shopping-item v-for="(item, index) in orderedList"
                        :key="index"
                        :item="item">
        </shopping-item>
      </div>
    </wrapper>
  </div>
</template>

<script>
import ShoppingItem from './ShoppingItem'
import { shopping as config } from '../../../config.json'
import { EventBus } from '../../eventBus.js'
import Wrapper from '../utils/Wrapper'

export default {
  name: 'shopping',
  components: { ShoppingItem, Wrapper },
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
  @import '../../styles/style'

  #shopping
    font-size: .6rem
    padding: 2em

    .list
      margin: 1em 0
      display: inline-block
</style>
