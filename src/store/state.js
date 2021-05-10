/*
 * @Descripttion : 
 * @version      : 
 * @Author       : heweiliang
 * @Date         : 2021-04-23 16:24:58
 * @LastEditors  : heweiliang
 * @LastEditTime : 2021-04-28 23:40:35
 * @FilePath     : \src\store\state.js
 */
import { playMode } from '@/common/playConfig.js'
import { getSearch } from '@/common/cache'
const state = {
    // 是否登录
    loginStatu: null,
    // 用户信息
    userInfo: null,
    // 歌手信息
    singer: {},
    // 播放状态
    playing: false,
    // 播放列表
    playList: [],
    // 顺序列表
    sequenceList: [],
    // 播放模式(循环，单曲，随机)
    mode: playMode.sequence,
    // 播放索引
    currentIndex: -1,
    // 搜索历史
    searchHistory: getSearch(),
    // 历史播放列表
    historyList: []
}

export default state
