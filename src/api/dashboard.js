import request from '@/utils/request'

export function getDashboard() {
  return request({
    url: '/api/xadmin/v1/dashboard',
    method: 'get'
  })
}
