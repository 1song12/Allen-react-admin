import request from './request'

export function getBrand (){
    return request({
        url:"/brand/getBrand",
        method:'post'
    })
}