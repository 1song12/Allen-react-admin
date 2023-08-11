import request from './request'

// 注册
export function register(data){
    return request({
        url:"/user/register",
        method:"post",
        data:{
            ...data
        }
    })
}




// 登陆
export function login(data){
    return request({
        url:"/user/login",
        method:"post",
        data:{
            ...data
        }
    })
}
// 删除用户
export function deleteUser(user){
    return request({
        url:"/user/deleteUser",
        method:"post",
        data:{
            user
        }
    })
}

// 用户列表
export function getUserList(){
    return request({
        url:"/user/getUserList",
        method:"post",
    })
}

// 更新个人信息
export function changemsg(data){
    return request({
        url:"/user/changemsg",
        method:"post",
        data:{
            ...data
        }
    })
}

// 更改密码
export function changepsd(data){
    return request({
        url:"/user/changepsd",
        method:"post",
        data:{
            ...data
        }
    })
}