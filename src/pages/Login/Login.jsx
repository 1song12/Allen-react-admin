import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useHistory, Route, Switch, Link } from 'react-router-dom';
import './Login.scss'
import login from '../../redux/actions/user'
import store from '../../redux/index.js'
import { HashRouter } from 'react-router-dom';


export default function Login() {
  let router = useHistory()
  const onFinish = (values) => {
    console.log('Success:', values);
    let user = values.username
    let psd = values.password
    console.log(user);

    store.dispatch(login({
      user, psd
    }))
    setTimeout(() => {
      let token = store.getState().token
      console.log(store.getState().token);
      if (token) {
        router.push('/home')
      }
    }, 100);


  };

  // 表单验证没通过触发函数
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo.values);

    // mmessage  消息提示框
  };

  const valName = (res, val) => {
    // console.log(val);
    if (val === undefined || val.trim() === '') {
      return Promise.reject(new Error('用户不能为空')) // 报错再控制台报错
    }
    let reg = /^[A-Za-z0-9]{3,10}$/
    if (!reg.test(val)) {
      return Promise.reject(new Error('请输入3-10的数组或字母'))
    }
    return Promise.resolve('验证成功')
  }
  const valPsd = (res, val) => {
    if (val === undefined || val.trim() === '') {
      return Promise.reject(new Error('密码不能为空')) // 报错再控制台报错
    }
    let reg = /^[A-Za-z0-9]{3,10}$/
    if (!reg.test(val)) {
      return Promise.reject(new Error('请输入3-10的数组或字母'))
    }
    return Promise.resolve('验证成功')
  }


  const registers = () => {
    router.push('/register')
  }



  return (

    <div>


      <div className="box">
        <div className="left"></div>
        <div className="right">
          <Form name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }} style={{ maxWidth: 600, padding: '30px', }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item name="username"
              rules={[{
                validator: valName
              },]}>
              <Input placeholder="请输入用户名" className="user" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{
                validator: valPsd
              },]} >
              <Input.Password placeholder="请输入密码" className="pass" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
              <Button type="primary" htmlType="submit" className="logon">
                登录
              </Button>
            </Form.Item>

            <Form.Item className="psd"
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>记住密码</Checkbox>
            </Form.Item>

           
</Form>

    <div className='no'>没有账号 ? <span onClick={()=>registers()}>立即注册</span></div>
    </div>
    </div>
    </div>

  )
}
