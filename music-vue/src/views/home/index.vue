<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : heweiliang
 * @Date         : 2021-04-22 15:55:20
 * @LastEditors  : heweiliang
 * @LastEditTime : 2021-04-26 22:58:41
 * @FilePath     : \src\views\home\index.vue
-->
<template>
  <div class="home-wrap container">
    <banner></banner>
    <recommend-music></recommend-music>
    <recommend-songs></recommend-songs>
    <recommend-singer></recommend-singer>
  </div>
</template>

<script>
import Banner from 'components/home/banner/index'
import RecommendSongs from 'components/home/recommend-songs/index'
import RecommendMusic from 'components/home/recommend-music/index'
import RecommendSinger from 'components/home/recommend-singer/index'

export default {
  name: 'Home',
  components: {
    Banner,
    RecommendSongs,
    RecommendMusic,
    RecommendSinger,
  },
  directives: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="stylus" scoped></style>