
import React from 'react'
import { HashRouter, Route, Redirect,Switch} from 'react-router-dom'
import Login from '../pages/Login/Login'
import Layout from '../pages/Layout/Layout'
import store from '../redux/index'

import  Register  from '../pages/Register/Register'


 


export default function Router () {
  
    return (
        <div>
            <HashRouter>
                {/* 注册路由组件：根据页面 */}
                {/* 
                cms 管理系统：
                一级路由：两个页面：
                1：登陆页面
                2：主要布局页面  （登陆后才能访问）
                */}
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/" render={()=>{
                    // let token = window.localStorage.getItem("token")
                    let  token = store.getState().token
                    // if(!token){
                    //     return <Redirect to="/login" />
                    // }
                    return <Layout />
                    }}></Route>
                    
                     </Switch>
            </HashRouter>
        </div>
    )
}
