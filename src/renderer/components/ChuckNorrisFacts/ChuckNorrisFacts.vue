<template>
  <div id="fact" class="align-center font-cursive">
    <p v-for="fact in facts" :key="fact" v-html="fact"></p>
  </div>
</template>

<script>
import { chuckNorris as config } from '../../../config.json'
import { EventBus } from '../../eventBus.js'

export default {
  name: 'chuckNorrisFacts',
  data () {
    return {
      url: config.api.baseUrl + `?data=tri:${config.orderby};nb:${config.limit}`,
      facts: [],
      factTimer: null
    }
  },
  mounted () {
    EventBus.$on('update:chucknorrisfacts', this.getFact)
    this.factTimer = setInterval(this.getFact, config.updateInterval || (60 * 60 * 1000)) // 1h
    this.getFact()
  },
  methods: {
    getFact () {
      console.log('[GET] chuck norris fact')
      this.$http.get(this.url)
        .then(res => {
          if (res.data) {
            this.facts = res.data.map(f => f.fact)
          }
        })
        .catch(() => { console.log('[CHUCK NORRIS FACTS] FETCH ERROR') })
    }
  }
}
</script>

<style lang="sass" scoped>
  #fact
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    padding: 2rem
    font-size: 2rem
</style>
