<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : heweiliang
 * @Date         : 2021-04-29 13:22:44
 * @LastEditors  : heweiliang
 * @LastEditTime : 2021-05-02 17:14:11
 * @FilePath     : \src\components\common\empty\index.vue
-->
<template>
  <div class="empty flex-column">
    <!-- <img src="../../../assets/images/empty.png" alt="" /> -->
    <h3>{{ emptyText }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    emptyText: {
      type: String,
      default: '网络正在加载中，请等一下！！！',
    },
  },
  components: {},
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style lang='stylus' scoped>
.empty {
  width: 100%;

  h3 {
    color: $color-theme;
  }

  img {
    width: 300px;
  }
}
</style>