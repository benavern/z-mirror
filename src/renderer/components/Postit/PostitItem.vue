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
@import '../../styles/style'

#postit
  .postit-item
    order: 0
    flex: 0 1 auto
    align-self: auto
    width: 50%
    margin: 1.5rem .5rem 0 0

    .postit-item-content
      word-wrap: break-word
</style>
