import RXRequest from './index'
import type { IResponseResult } from './index'
import type { IHomeInfo } from '@/store/home'

export default function getHomeInfoReq() {
  return RXRequest.get<IResponseResult<IHomeInfo>>('/home/info1', { type: 'oppo' })
}
