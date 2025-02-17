import RXRequest from './index'
import type { IResponseResult } from './index'
import type { IHomeInfo } from '@/store/home'

// 首页（OPPO专区）数据请求
export const getHomeInfoReq = () => {
  return RXRequest.get<IResponseResult<IHomeInfo>>('/home/info', { type: 'oppo' })
}
// OnePlus专区数据请求
export const getHomeOnePlusInfoReq = () => {
  return RXRequest.get<IResponseResult<IHomeInfo>>('/home/info', { type: 'onePlus' })
}
// 智能硬件数据请求
export const getHomeIntelligentInfoReq = () => {
  return RXRequest.get<IResponseResult<IHomeInfo>>('/home/info', { type: 'intelligent' })
}
