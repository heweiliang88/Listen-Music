# LiuTeng-Music

​		本项目采用前后端分离架构模式，引入NodeJS层为服务桥接层，前端主要负责页面的渲染工作，后端主要完成大量的逻辑计算和具体业务逻辑层，这种架构模式提高了工作效率、降低维护成本和使局部性能提升。前端技术主要使用了es6、vue 全家桶（vue、vue-router、vuex）。后端技术实现了数据接口NodeJS服务层，通过编写接口。为了可定制化的轻量级网站管理，本项目采用了轻业务层的模式，主要功能围绕的是视图效果的实现。存储技术使用了前端浏览器数据存储方式通过Cookie存储用户登陆凭证、使用localStroage和SessiosnStroage的方式存储网站基本状态信息。数据接口对接了第三方开源网易云音乐的数据接口项目。代码规范使用了eslint 接口规范使用Restful风格的接口。

## 目录结构

```bash
music-admin // 后台系统
music-api // api接口
music-node // 后端业务
music-vue // 前端业务
music-mysql // 数据库文件
```

## 项目技术

前端

- vue
- vue-router
- vuex
- vue-cli
- scss
- es6
- babel
- eslint
- elemenui
- webpack 
- axios:一个易用、简洁且高效的http库
- vue-mouse-parallax: 一个易于使用的鼠标视差组件-由Vue.js制成
- vue kinesis: 这是一个交互式动画组件
- vue-infinite-scroll:一个无限滚动的插件

后端

- express
- express
- body-parser
- vue-element-admin 

数据库

- mysql

## 项目部署

```bash
cd music-admin 
npm i
npm run dev
cd music-api
npm i 
npm run dev
cd music-vue
npm i 
npm run serve 
```

## 完成功能

规范化

- [ ] Git规范化

数据库业务

- [x] 设计数据库

前端业务

- [x] 搜索功能：搜索建议
- [x]  歌单功能：热门歌单分类、歌单详情、歌单推荐、相似歌单、歌单评论、歌单收藏者、收藏/取消收藏歌单
- [x]   排行榜功能：
- [x]  视频功能：视频分类列表、视频标签列表、全部视频列表、视频标签/分类下的视频、视频播放地址、视频详情、视频点赞转发评论数数据、相关视频
- [x]  歌曲功能：歌曲详情、播放与暂停音乐、上下首音乐，调节音量功能、歌词功能
- [x]  评论功能：视频评论、发送评论、给评论点赞、资源点赞
- [x] 专辑功能：获取专辑内容、专辑评论
- [x] mv功能：获取mv详情、获取mv点赞转发评论数数据、获取mv播放地址、mv评论
- [x] 登陆功能：登陆下线
- [x] 响应式适配测试

后端业务

- [x] 需求分析
- [x] 第三方音乐接口编写
- [x] 第三方后台管理系统   
- [ ] 自动化部署                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

## 效果演示

[体验网址 停止服务](http://120.78.149.188/)

