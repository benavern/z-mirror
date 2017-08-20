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
export default {
  name: 'photos',
  components: { PhotoItem },
  data () {
    return {
      list: [
        { url: '/static/01.jpg', title: 'Achat de l\'écran', id: 1 },
        { url: '/static/02.jpg', id: 2 }
      ],
      currentItem: 0,
      carouselTimer: null
    }
  },
  computed: {
    orderedList () {
      return this.list.sort((a, b) => a.id > b.id)
    }
  },
  mounted () {
    this.startCarousel()
  },
  methods: {
    startCarousel () {
      this.carouselTimer = setInterval(() => {
        this.currentItem = (this.currentItem + 1) % this.list.length
      }, config.carouselInterval)
    },
    stopCarousel () {
      clearInterval(this.carouselTimer)
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
