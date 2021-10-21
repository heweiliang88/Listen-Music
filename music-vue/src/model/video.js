/*
 * @Descripttion : 
 * @version      : 
 * @Author       : heweiliang
 * @Date         : 2021-04-23 13:39:24
 * @LastEditors  : heweiliang
 * @LastEditTime : 2021-04-28 23:38:10
 * @FilePath     : \src\model\video.js
 */
/** 视频处理方法 */

import utils from '../utils/utils'

export default class Video {
    constructor({ id, nickName, name, playCount, duration, image, isLive }) {
        ; (this.id = id),
            (this.nickName = nickName),
            (this.name = name),
            (this.playCount = playCount),
            (this.duration = duration),
            (this.image = image),
            (this.isLive = isLive)
    }
}

export function createVideo(videoData) {
    if (videoData.duration > 0) {
        videoData.duration = utils.formatTime(videoData.duration)
    }
    return new Video({
        id: videoData.id,
        nickName: videoData.nickName,
        name: videoData.name,
        playCount: videoData.playCount,
        duration: videoData.duration,
        image: videoData.image,
        isLive: videoData.isLive
    })
}