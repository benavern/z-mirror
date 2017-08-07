<template>
  <div id="fact" class="align-center font-cursive" v-html="fact"></div>
</template>

<script>
export default {
  name: 'chuckNorrisFacts',
  data () {
    return {
      fact: 'Chuck Norris ...',
      factTimer: null
    }
  },
  mounted () {
    this.getFact()
    this.factTimer = setInterval(this.getFact, 60 * 60 * 1000) // 1h
  },
  methods: {
    getFact () {
      this.$http.get(`http://www.chucknorrisfacts.fr/api/get?data=tri:alea;nb:1`)
        .then(res => {
          if (res.data) {
            this.fact = res.data[0].fact
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
