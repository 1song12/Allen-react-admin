import axios from "axios"

let  serve = axios.create({
    baseURL:'http://192.168.124.212:3000',
    timeout:5000,
})

serve.interceptors.request.use(config=>{
    // ....
    return config
})
serve.interceptors.response.use(res=>{
    // ....
    return res
})

export default serve