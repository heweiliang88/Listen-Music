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

运维

- github action
- github pages
- linux

## 项目部署

前端部署

- 部署在3000端口

```bash
cd music-vue
npm i 
npm run serve 
```

后端部署

自定义业务层

- 部署在6000端口

```bash
cd music-node
npm i 
npm run dev
```

第三方后台数据接口

- 部署在6001端口

```bash
cd music-api
npm i 
set PORT=6001 && node app.js
```

后台管理

- 部署在9000端口

```bash
cd music-admin  
npm i
npm run dev
```

数据库部署

- 部署在3306端口

```bash
 cd music-mysql 
```

## 完成功能

代码规范

- [x] 使用commitizen规范commit  message
- [x] 集成commitlint验证提交规范
- [x] 使用 husky 的 commit-msg hook 触发验证提交信息的命令

数据库业务

- [x] 设计数据库

前端业务

- [x] 搜索功能：搜索建议、模糊搜索
- [x] 歌单功能：热门歌单分类、歌单详情、歌单推荐、相似歌单、歌单评论、歌单收藏者、收藏/取消收藏歌单
- [x] 排行榜功能：音乐榜单
- [x] 视频功能：视频分类列表、视频标签列表、全部视频列表、视频标签/分类下的视频、视频播放地址、视频详情、视频点赞转发评论数数据、相关视频
- [x] 播放器功能：歌曲详情、播放与暂停音乐、上下首音乐，调节音量功能、歌词功能
- [x] 评论功能：视频评论、发送评论、给评论点赞、资源点赞
- [x] 专辑功能：获取专辑内容、专辑评论
- [x] mv功能：获取mv详情、获取mv点赞转发评论数数据、获取mv播放地址、mv评论
- [x] 登陆功能：登陆、注册、忘记密码、获取手机验证码、图形验证码

测试任务

- [x] 单元测试
- [x] 兼容性测试
	- [x] 浏览器兼容性测试：Chrome、Firefox 、IE8~11
	- [x] 设备兼容性测试：手机、PC、平板

后端业务

- [x] 需求分析
- [x] 第三方音乐接口

后台业务

- [x] 接入第三方后台管理系统 vue-element-admin 

部署业务

- [x] 编写一键部署脚本自动启动项目
- [x] 部署前端网站到github page上   
- [x] 使用Github Action + Gihub + Nginx实现自动化部署
- [x] 部署后台项目到内网服务器上   

文档编写

- [x] 接口文档
- [x] 开发文档
- [x] 开发问题
- [x] 规范化文档
- [x] README.md

## 效果演示

[体验网址](http://120.78.149.188/)

### 前台展示

![djNbYxR6oKLS4Qi](https://i.loli.net/2021/10/28/B7Caot94TceHLGd.png)

![nmP4TY9QdHFpXMo](https://i.loli.net/2021/10/28/xUP52Zwur7YW9Cs.png)

### 后台展示



