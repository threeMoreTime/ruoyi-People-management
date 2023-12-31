import request from '@/utils/request'

// 查询奖惩管理列表
export function listContract(query) {
  return request({
    url: '/system/contract/list',
    method: 'get',
    params: query
  })
}

// 查询奖惩管理详细
export function getContract(id) {
  return request({
    url: '/system/contract/' + id,
    method: 'get'
  })
}

// 新增奖惩管理
export function addContract(data) {
  return request({
    url: '/system/contract',
    method: 'post',
    data: data
  })
}

// 修改奖惩管理
export function updateContract(data) {
  return request({
    url: '/system/contract',
    method: 'put',
    data: data
  })
}

// 删除奖惩管理
export function delContract(id) {
  return request({
    url: '/system/contract/' + id,
    method: 'delete'
  })
}
