<template>
  <div class="footer">
    <div class="container">
      <p class="title">liutengmusic</p>
      <p class="desc">
        本网站的宗旨是方便音乐人之间的交流，让更多志同道合的人有机会合作。
      </p>
      <div class="social flex-row">
        <a href="javascript:;">
          <span class="flex-center">
            <i class="iconfont nicewangyiyunyinle"></i>
          </span>
        </a>
        <a href="javascript:;">
          <span class="flex-center">
            <i class="iconfont niceicon_githubb"></i>
          </span>
        </a>
      </div>

      <div class="copyright">
        <div class="container">
          <p>
            <span class="mr5">Copyright © 2021-2025</span>
          </p>
        </div>
      </div>
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
.footer {
  width: 100%;
  background: #161e27;

  .container {
    padding: 2rem 8rem;

    .title {
      position: relative;
      font-size: 0.9375rem;
      letter-spacing: 1px;
      color: #fff;
      margin-bottom: 1rem;
      padding: 0 1rem;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 3px;
        height: 15px;
        border-radius: 5px;
        background: $color-theme;
        transform: translate(0%, -50%);
      }
    }

    .desc {
      font-size: 0.8125rem;
      line-height: 1.8;
      color: #6D7685;
    }

    .social {
      margin: 1rem -0.25rem 0;

      a {
        position: relative;
        border-radius: 50%;
        text-align: center;
        width: 34px;
        height: 34px;
        font-size: 1rem;
        background-color: #232a31;
        border-color: #232a31;
        color: #6D7685;
        display: flex;
        font-weight: 400;
        margin: 0.25rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

        span {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
        }

        &:hover {
          background: #11181f;
          color: #fff;
        }
      }
    }
  }

  .copyright {
    padding: 1.5rem 0;
    border-top: 1px solid #232a31;

    .container {
      padding: 0;
      color: #6D7685;
      font-size: 0.8125rem;

      a {
        color: #6D7685;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

        &:hover {
          color: #fff;
        }
      }
    }
  }
}
</style>
