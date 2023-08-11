import React, { useState } from 'react'
import { Layout, theme, Button, Avatar, Dropdown, Space } from 'antd';
const { Header } = Layout;
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined
} from '@ant-design/icons';
export default function TopHeader(props) {
  // let [collapsed, setCollapsed] = useState(false)
  let {onTopHeaderClick,collapsed} = props;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const menus = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          个人中心
        </a>
      ),
      icon: <UserOutlined />,
      disabled: false,
    }, {
      key: 2,
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          退出登录
        </a>
      ), icon: <UserOutlined />,
    },

  ]




  const getPath = (menuList, pathname) => {
    let temppath = [];
    try {
      function getNodePath(node) {
        temppath.push(node);
        //找到符合条件的节点，通过throw终止掉递归
        if (node.path === pathname) {
          throw new Error("GOT IT!");
        }
        if (node.children && node.children.length > 0) {
          for (var i = 0; i < node.children.length; i++) {
            getNodePath(node.children[i]);
          }
          //当前节点的子节点遍历完依旧没找到，则删除路径中的该节点
          temppath.pop();
        } else {
          //找到叶子节点时，删除路径当中的该叶子节点
          temppath.pop();
        }
      }
      for (let i = 0; i < menuList.length; i++) {
        getNodePath(menuList[i]);
      }
    } catch (e) {
      return temppath;
    }
  };
  
  return (

    
    <div className='TopHeader'>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => onTopHeaderClick(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        > </Button>

        <div style={{ float: 'right', marginRight: "50px", display: 'flex', alignItems: "center" }}>
          <span style={{ marginRight: '15px', fontSize: "16px", fontWeight: "700" }}>欢迎xx登录企商平台 </span>

          <Dropdown menu={{items:menus}} placement='bottomRight'>
            <a onClick={(e) => e.preventDefault()}>
                <Avatar icon={<UserOutlined />} />
            </a>

          </Dropdown>
        
        </div>
      </Header>
    </div>
  )
}
