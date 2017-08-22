<template>
  <div class="photos-wrapper" v-if="list.length">
    <photo-item v-for="(item, index) in orderedList" :key="item.id"
                :url="item.url"
                :title="item.title"
                :show="currentItem === index">
    </photo-item>
  </div>
</template>

<script>
import PhotoItem from './PhotoItem'
import { photos as config } from '../../../config.json'
import { EventBus } from '../../eventBus.js'
export default {
  name: 'photos',
  components: { PhotoItem },
  data () {
    return {
      url: config.api.baseUrl,
      list: [],
      currentItem: 0,
      carouselTimer: null,
      photosTimer: null
    }
  },
  computed: {
    orderedList () {
      return this.list.sort((a, b) => a.id > b.id)
    }
  },
  mounted () {
    EventBus.$on('update:photos', this.getPhotos)
    EventBus.$on('update:photos:previous', this.previous)
    EventBus.$on('update:photos:next', this.next)
    this.getPhotos()
    this.photosTimer = setInterval(this.getPhotos, config.updateInterval)
  },
  methods: {
    startCarousel () {
      this.carouselTimer = setInterval(() => {
        this.next()
      }, config.carouselInterval)
    },
    stopCarousel () {
      clearInterval(this.carouselTimer)
    },
    next () {
      this.currentItem = (this.currentItem + 1) % this.list.length
      console.log(`[PHOTOS] display item #${this.currentItem}`)
    },
    previous () {
      this.currentItem = ((this.currentItem - 1) < 0) ? (this.list.length - 1) : (this.currentItem - 1)
      console.log(`[PHOTOS] display item #${this.currentItem}`)
    },
    getPhotos () {
      console.log('[GET] photos')
      this.stopCarousel()
      this.$http.get(this.url)
        .then(res => {
          if (res.data) {
            this.list = res.data.data
            if (this.list.length > 1) this.startCarousel()
            else this.currentItem = 0
          }
        })
        .catch(() => { console.log('[PHOTOS] FETCH ERROR') })
    }
  }
}
</script>

<style lang="sass" scoped>
  .photos-wrapper
    position: relative
    height: 100%
    text-align: center
    overflow: hidden
</style>
