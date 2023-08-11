import React, { useState } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Slider from '../../components/Slider'
import TopHeader from '../../components/TopHeader'

import Nopermasion from './nopermasion/Nopermiasion'            // 404
import Home from '../Layout/Home/Home'                         // 首页
import RightList from './right-manager/RightList'  // 权限列表
import RoleList from './right-manager/RoleList'  // 角色列表
import ShopList from './shop-manager/ShopList'        // 商品列表
import UserList from './user-manager/UserList'      // 用户列表
import Brand from './Brand/Brand'



import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, theme } from 'antd';
const { Content } = Layout;
import './layout.scss'



export default function ILayout() {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onTopHeaderClick=(data)=>{
    setCollapsed(data)
    // console.log(data);
  }
  return (
    <div className='layout'>

      <Layout>
        <Slider collapsed={collapsed}></Slider>
        <Layout>
          <TopHeader collapsed={collapsed} 
          onTopHeaderClick={onTopHeaderClick}
          ></TopHeader>
          <Content  style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}>
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/user-manage/list" component={UserList}></Route>
              <Route path="/right-manage/role/list" component={RoleList}></Route>
              <Route path="/right-manage/right/list" component={RightList}></Route>
              <Route path="/shop/list" component={ShopList}></Route>
              <Route path="/brand" component={Brand}></Route>
              <Redirect from="/" to="/home" exact></Redirect>
              <Route path="*" component={Nopermasion}>
              </Route>
            </Switch>
          </Content>

        </Layout>

      </Layout>







    </div>
  )
}
