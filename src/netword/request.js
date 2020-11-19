import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 5000//毫秒，超时报错
  })

  instance.interceptors.request.use(config=>{
    // console.log(config)
    return config
  },error => {console.log(error)})

  //响应拦截(预处理)
  instance.interceptors.response.use(res=>{
    // console.log(res)
    return res.data
    //或者return res.data.data
  },error => {console.log(error)})

  return instance(config)
}
