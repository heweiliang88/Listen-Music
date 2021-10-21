/*
 * @Author: mikey.zhaopeng 
 * @Date: 2021-04-Th 08:47:14 
 * @Last Modified by:   mikey.zhaopeng 
 * @Last Modified time: 2021-04-Th 08:47:14 
 */

/*  
    services层的出口
    api 项目的api 接口 配置
    -- index 入口
        -- api 
        -- user
        -- instance 拦截
    -- config 配置文件    
*/

import * as getApi from './services/api';
import * as getUserApi from './services/user'

export default {
    ...getApi,
    ...getUserApi
}

