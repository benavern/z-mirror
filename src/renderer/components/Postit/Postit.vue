<template>
  <div id="postit" v-if="list.length">
    <div class="list">
      <postit-item v-for="item in orderedList"
                      :key="item.id"
                      :done="item.done">
        {{ item.content }}
      </postit-item>
    </div>
  </div>
</template>

<script>
import PostitItem from './PostitItem'
import { postit as config } from '../../../config.json'
import { EventBus } from '../../eventBus.js'

export default {
  name: 'postit',
  components: { PostitItem },
  data () {
    return {
      list: [],
      postitTimer: null
    }
  },
  computed: {
    orderedList () {
      return this.list.sort((a, b) => a.id > b.id)
    }
  },
  mounted () {
    EventBus.$on('update:postit', this.getPostit)
    this.postitTimer = setInterval(this.getPostit, config.updateInterval || (60 * 60 * 1000)) // 1h
    this.getPostit()
  },
  methods: {
    getPostit () {
      console.log('[GET] postit list')
      this.$http.get(config.api.baseUrl)
        .then(res => {
          if (res.data) {
            this.list = res.data.data
          }
        })
        .catch((err) => { console.error('[POSTIT] FETCH ERROR', err) })
    }
  }
}
</script>

<style lang="sass" scoped>
  #postit
    font-size: .6rem
    height: 100%
  .list
    height: 100%
    display: flex
    flex-direction: column
    flex-wrap: wrap
    justify-content: flex-start
    align-content: stretch
    align-items: flex-start

</style>
