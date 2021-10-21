<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : heweiliang
 * @Date         : 2021-04-22 16:07:55
 * @LastEditors  : heweiliang
 * @LastEditTime : 2021-04-28 23:47:29
 * @FilePath     : \src\components\home\recommend-music\index.vue
-->
<template>
  <div class="recommend-music">
    <h1 class="title flex-center">推荐新歌曲</h1>
    <song-list :songList="songs"></song-list>
  </div>
</template>

<script>
import songList from 'components/common/songList/index'
import { createSong } from '@/model/song'
export default {
  data() {
    return {
      songs: [],
    }
  },
  components: {
    songList,
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 获取推荐新音乐
    async getNewSongs() {
      try {
        let res = await this.$api.getNewSongs()
        let list = []
        if (res.code === 200) {
          res.result.map((item) => {
            list.push(item.id)
          })
          this.getSongDetail(list)
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 获取歌曲列表
    async getSongDetail(sliceArr) {
      let timestamp = new Date().valueOf()
      sliceArr = sliceArr.join(',')
      try {
        let res = await this.$api.getSongDetail(sliceArr, timestamp)
        this.songs = this._normalizeSongs(res.songs)
        console.log(this.songs)
      } catch (error) {}
    },
    // 处理歌曲
    _normalizeSongs(list) {
      let ret = []
      list.map((item) => {
        if (item.id) {
          ret.push(createSong(item))
        }
      })
      return ret
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getNewSongs()
  },
}
</script>

<style lang="stylus" scoped>
.recommend-music {
  .title {
    margin: 50px 0 30px 0;
  }
}
</style>
