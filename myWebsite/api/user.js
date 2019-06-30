import request from '@/utils/request'
const api_group = 'user'
const api_name = 'user'
export default {
  info() {   
    return request({
      url: `/${api_group}/${api_name}/info`,
      method: 'get'
    })
  },
  register(user) {
    return request({
      url: `/${api_group}/${api_name}/register`,
      method: 'post',
      data:user
    })
  },
  sendsms(mobile) {
    return request({
      url: `/${api_group}/${api_name}/sendsms/${mobile}`,
      method: 'put'
    })
  },
  login(username, password) {
    return request({
      url: `/${api_group}/${api_name}/login`,
      method: 'post',
      data: {
        username,
        password
      }
    })
  },
  logout() {
    return request({
      url: `/${api_group}/${api_name}/logout`,
      method: 'post'
    })
  },
  saveinfo(user) {
    return request({
      url: `/${api_group}/${api_name}/saveinfo`,
      method: 'put',
      data:user
    })
  }
}
