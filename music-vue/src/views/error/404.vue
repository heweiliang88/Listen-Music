<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : heweiliang
 * @Date         : 2021-04-21 09:25:01
 * @LastEditors  : heweiliang
 * @LastEditTime : 2021-05-02 17:05:47
 * @FilePath     : \src\views\error\404.vue
-->
<template>
  <div class="error-wrap container flex-column">
    <div class="content-error h-v-50">
      <img src="../../assets/images/404.jpeg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>

<style lang="stylus" scoped>
.error-wrap {
  height: calc(100vh - 100px);
  padding-top: 70px;
  background-color: rgb(246, 246, 246);

  .content-error {
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;

    img {
      margin-bottom: 1.5rem;
    }

    h1 {
      font-size: 6rem;
      font-weight: 300;
      line-height: 1.2;
    }

    h4 {
      font-size: 1.5rem;
    }
  }
}
</style>