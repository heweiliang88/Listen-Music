// vue
import Vue from 'vue'
import App from '@/App.vue'
// router
import router from '@/router'
// vuex
import store from '@/store'
// api
import getApi from '@/api/index'
// 数据存储
import utils from '@/utils/utils'
// 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 滚动
import infiniteScroll from 'vue-infinite-scroll'
//
import niceLoading from '@/components/common/empty/index.vue'
import niceEmpty from '@/components/common/empty/index.vue'
// css
import 'swiper/css/swiper.css'
import '@/assets/styles/reset.styl'
import '@/assets/styles/common.css'
// 按需导入
import {
  Avatar,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Form,
  FormItem,
  Input,
  Button,
  Image,
  Icon,
  InfiniteScroll,
  Pagination,
  MessageBox,
  Message,
  Notification,
  Table,
  TableColumn,
  Popover,
  Tooltip,
  Slider,
  Loading
} from 'element-ui'

Vue.use(Avatar)
  .use(Image)
  .use(Icon)
  .use(Pagination)
  .use(InfiniteScroll)
  .use(Dropdown)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Form)
  .use(FormItem)
  .use(Input)
  .use(Button)
  .use(Table)
  .use(TableColumn)
  .use(Popover)
  .use(Tooltip)
  .use(Slider)
  .use(Loading)

Vue.config.productionTip = false
Vue.prototype.$api = getApi
Vue.prototype.utils = utils
Vue.use(VueAwesomeSwiper)
Vue.use(infiniteScroll);

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
Vue.component('niceLoading', niceLoading)
Vue.component('niceEmpty', niceEmpty)

Vue.directive('preventReClick', {
  inserted(el, binding) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 3000)
      }
    })
  }
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
