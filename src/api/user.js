import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/xadmin/v1/login/account',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/xadmin/v1/currentUser',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
