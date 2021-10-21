<template>
  <div class="recommend-songs">
    <h1 class="title flex-center">推荐歌单</h1>
    <song-sheet :sheetList="personalizeds"></song-sheet>
  </div>
</template>

<script>
import songSheet from 'components/common/songSheet/index'
export default {
  data() {
    return {
      limit: 24,
      personalizeds: []
    }
  },
  components: {
    songSheet
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 获取推荐歌单
    async getPersonalized() {
      try {
        let res = await this.$api.getPersonalized(this.limit)
        // console.log(res)
        this.personalizeds = res.result
      } catch (error) {
        console.log(error)
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getPersonalized()
  }
}
</script>
<style lang="stylus" scoped>
.recommend-songs {
  margin-top: 40px;
  .title {
    margin: 50px 0 30px 0;
  }
}
</style>
