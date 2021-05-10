/*
 * @Descripttion : 
 * @version      : 
 * @Author       : heweiliang
 * @Date         : 2021-04-22 16:23:38
 * @LastEditors  : heweiliang
 * @LastEditTime : 2021-04-28 17:04:02
 * @FilePath     : \src\api\services\user.js
 */
import api from './instance'

// 用户登陆
export const login = (phone, password) =>
    api.get(`/login/cellphone?phone=${phone}&password=${password}`, {
        // `withCredentials` 表示跨域请求时是否需要使用凭证
        withCredentials: true, // defaul
    })


// 获取用户详情
export const getUserDetail = uid =>
    api.get(`/user/detail?uid=${uid}`, {})



//  获取用户播放记录
export const getUserRecord = (uid, type) =>
    api.get(`/user/record?uid=${uid}&type=${type}`, {})


// 获取用户歌单
export const getUserArtist = uid =>
    api.get(`/user/playlist?uid=${uid}`, {})
