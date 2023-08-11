import React, { useEffect, useMemo, useState } from 'react'
import { getUserList } from '../../../api/user'
import { deleteUser } from '../../../api/user'
import { changemsg } from '../../../api/user'
import { changepsd } from '../../../api/user'
import "./Userlist.module.scss"

export default function UserList() {
  let [userlist, setUserlist] = useState([])

  // 获取列表
useEffect(()=>{
  async function getUserLists(){
    let res = await getUserList()
    // console.log(res);
    let data = res.data.data
    // console.log(data);
    setUserlist(data)
  }
  
  getUserLists()

},[userlist],[])
 
// 删除用户  有bug
  const ondelete = async (user,id) => {
    // setUserlist()
    let res = await deleteUser(user)
    console.log(res);
    // setUserlist(userlist[id]=null)
  }

  // 更新权限  有bug
  const newchanges = async(user,role)=>{
    let res = await changemsg(user,role="admin")
    console.log(user,role="admin");
    console.log(res);
  }
  
  // 更改密码  bug
  const changepsds = async(user)=>{
    let newpsd = "111"
    let data=({user,newpsd})
    let res = await changepsd(data)
    console.log(user,newpsd)
    console.log(res);
  }
  

  return (
    <div>
      {
        userlist.map(item => {
          return (
            <li key={item.id}>
              <span>{item.user}</span>
              <span>{item.psd}</span>
              <span>{item.role}</span>
              <button onClick={() => { ondelete(item.user,item.id) }}>删除</button>
              <button onClick={()=>{newchanges(item.user)}}>更新</button>
              <button onClick={()=>{changepsds(item.user,item.psd)}}>更改密码</button>
            </li>
          )
        })
      }
    </div>
  )
}
