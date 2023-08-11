import {login} from '../../api/user'

export default (data)=>{
    console.log(data);

    return async (dispatch)=>{
        let res = await login(data)
        console.log(res);
        // console.log(res.data.data.token);
        // let token  = res.data.data.token
        dispatch({
            type:'tokens',
            data:data
        })
    }
}