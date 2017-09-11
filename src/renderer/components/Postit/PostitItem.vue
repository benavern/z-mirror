<template>
  <wrapper class="postit-item" top-right>
    <div class="postit-item-content font-normal"
          v-html="compiledMarkdown">
    </div>
  </wrapper>
</template>

<script>
import marked from 'marked'
import Wrapper from '../utils/Wrapper'

export default {
  name: 'postitItem',
  components: { Wrapper },
  props: ['done', 'content'],
  computed: {
    compiledMarkdown () {
      return marked(this.content)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../styles/variables'

.postit-item
  order: 0
  flex: 0 1 auto
  align-self: auto
  width: 50%
  padding: 1rem
  margin: 1.5rem .5rem 0 0

  .postit-item-content
    word-wrap: break-word

    /deep/
      a
        color: $primary
        text-decoration-style: dotted

      h1, h2, h3
        color: $primary
        margin: .2em 0 .5em
        font-family: $font-custom

      hr
        width: 80%
        margin: 1em auto
        border: none
        border-top: 1px solid darken($gray, 25%)

</style>
