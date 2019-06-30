import request from '@/utils/request'
import {getUser} from '@/utils/auth'
const api_group = 'base'
const api_name = 'label'
export default {
  toplist() {   
    return request({
      url: `/${api_group}/${api_name}/toplist`,
      method: 'get'
    })
  },
  list() {   
    return request({
      url: `/${api_group}/${api_name}/list`,
      method: 'get'
    })
  },
  addul(labelid){
    return request({
      url: `/${api_group}/${api_name}/addul/${labelid}`,
      method: 'put'
    })
  }
}
