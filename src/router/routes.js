import Layout from '@/views/layout/index'
export const pageError = {
    path: '*',
    name: '404',
    meta: {
        title: '404-您访问的页面不存在'
    },
    component: resolve => {
        require(['@/views/error/404'], resolve)
    }
}
export const loginRouter = [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            isLogin: true
        },
        component: resolve => {
            require(['@/views/login/index'], resolve)
        }
    }
]

export const appRouter = [
    {
        path: '/',
        redirect: {
            name: 'home'
        },
        meta: {
            title: '首页',
            keepAlive: true
        },
        component: Layout,
        children: [
            {
                path: 'home',
                meta: {
                    title: '首页',
                    keepAlive: true
                },
                name: 'home',
                component: resolve => {
                    require(['@/views/home/index'], resolve)
                }
            },
            {
                path: 'singer',
                meta: {
                    title: '歌手',
                    keepAlive: true
                },
                name: 'singer',
                component: resolve => {
                    require(['@/views/singer/index.vue'], resolve)
                }
            },
            {
                path: 'singer-detail',
                meta: {
                    title: '详情',
                    keepAlive: true
                },
                name: 'singerDetail',
                component: resolve => {
                    require(['@/views/singer/detail/index.vue'], resolve)
                }
            },
            {
                path: 'rank',
                meta: {
                    title: '排行榜',
                    keepAlive: true
                },
                name: 'rank',
                component: resolve => {
                    require(['@/views/rank/index.vue'], resolve)
                }
            },
            {
                path: 'playlist',
                meta: {
                    title: '歌单',
                    keepAlive: true
                },
                name: 'playlist',
                component: resolve => {
                    require(['@/views/playlist/index.vue'], resolve)
                }
            },
            {
                path: 'playlist-detail',
                meta: {
                    title: '详情',
                    keepAlive: true
                },
                name: 'playlistDetail',
                component: resolve => {
                    require(['@/views/playlist/detail/index.vue'], resolve)
                }
            },
            {
                path: 'album-detail',
                meta: {
                    title: '详情',
                    keepAlive: true
                },
                name: 'albumDetail',
                component: resolve => {
                    require(['@/views/album/index.vue'], resolve)
                }
            },
            {
                path: 'video',
                meta: {
                    title: '视频',
                    keepAlive: true
                },
                name: 'video',
                component: resolve => {
                    require(['@/views/video/index.vue'], resolve)
                }
            },
            {
                path: 'video-detail',
                meta: {
                    title: '详情',
                    keepAlive: true
                },
                name: 'videoDetail',
                component: resolve => {
                    require(['@/views/video/detail/index.vue'], resolve)
                }
            },
            {
                path: 'mv',
                meta: {
                    title: 'mv',
                    keepAlive: true
                },
                name: 'mv',
                component: resolve => {
                    require(['@/views/mv/index.vue'], resolve)
                }
            },
            {
                path: 'mv-detail',
                meta: {
                    title: '详情',
                    keepAlive: true
                },
                name: 'mvDetail',
                component: resolve => {
                    require(['@/views/mv/detail/index.vue'], resolve)
                }
            },
            {
                path: 'personal',
                meta: {
                    title: '个人中心',
                    keepAlive: true
                },
                name: 'personal',
                component: resolve => {
                    require(['@/views/personal/index.vue'], resolve)
                }
            },
            {
                path: 'search',
                meta: {
                    title: '搜索',
                    keepAlive: true
                },
                name: 'search',
                component: resolve => {
                    require(['@/views/search/index.vue'], resolve)
                }
            }
        ]
    }
]
export const routes = [pageError, ...loginRouter, ...appRouter]
