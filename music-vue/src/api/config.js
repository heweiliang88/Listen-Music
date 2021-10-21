/*
 * @Descripttion : 
 * @version      : 
 * @Author       : heweiliang
 * @Date         : 2021-04-22 16:22:55
 * @LastEditors  : heweiliang
 * @LastEditTime : 2021-05-02 19:40:02
 * @FilePath     : \src\api\config.js
 */
let api_base_url = ''

// [网易云音乐 NodeJS 版 API](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=vercel-%e9%83%a8%e7%bd%b2)

// 默认 musci  http://localhost:3000/

if (process.env.NODE_ENV === 'development') {
    api_base_url = 'http://localhost:3000'
} else if (process.env.NODE_ENV === 'production') {
    // 网上部署的api接口
    // api_base_url = ''
}

export default { api_base_url }