import {request} from './request'

export function getHomeMultidata() {
  return request({
    // url: 'api/home/mulitdata',
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}