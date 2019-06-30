import axios from 'axios'
import {getUser} from '@/utils/auth'
// 创建axios实例
const service = axios.create({
  //baseURL: 'https://www.easy-mock.com/mock/5aa78fe79f42933b9045e8f7/tensqare/', // api的base_url
  baseURL: 'https://localhost:9090/', // api的base_url
  timeout: 30000, // 请求超时时间
  headers: {'Authorization': 'Bearer '+getUser().token}
})


export default service
