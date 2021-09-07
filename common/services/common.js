import request from "../utils/request";

// 字典表访问
export const getDictionaryList = (data) => {
    // return request('/village/console/getBasicDictionaryList?status=1', {
    //     method: 'get',
    //     data,
    // })
    return [
        {
            code: 1,
            name: "视频"
        },
        {
            code: 2,
            name: "图片"
        }
    ]
}

// 获取行政区域树
export const getRegionTree = (data) => {
    return request('/basic/console/area/getAreaTree', {
        method: 'post',
        data,
    })
}