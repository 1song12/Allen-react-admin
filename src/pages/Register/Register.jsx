import React, { useRef } from 'react'
import './Register.scss'
import { register } from '../../api/user'
import { useHistory } from 'react-router-dom/'
export default function Registers() {
  let users = useRef(null)
  let psds = useRef(null)

  let router = useHistory()

  const registers = () => {
    let user = users.current.value
    let psd = psds.current.value
    console.log(users.current.value);
    const Regusterss = async () => {
      let res = await register({ user, psd, role: 'admin' })
      console.log(res);
      console.log(res.data);
      let code = res.data.code
      if (code == 200) {
        router.push('/login')
      }
      if(code === 204){
        alert('已经注册啦')
      }
    }
    Regusterss()

  }





  return (

    <div className='register'>

      <input type="text" ref={users} />账号
      {/* <h1>{username}</h1> */}
      <hr />

      {/* <h1>{password}</h1> */}
      <input type="text" ref={psds} />mima
      <button onClick={() => registers()}>注册</button>
    </div>

  )
}
