import type { AsyncData, UseFetchOptions } from '#app'

// 网络请求地址
const BASE_URL = 'http://codercba.com:9060/oppo-nuxt/api'
export type methodType = 'GET' | 'POST' // 请求方式
// 响应数据接口
export interface IResponseResult<T> {
  code: number
  data: T
}

class RXRequest {
  request<T>(
    url: string,
    method: methodType,
    data?: any,
    options?: UseFetchOptions<T, any, any>
  ): Promise<AsyncData<T, any>> {
    return new Promise((resolve, reject) => {
      const newOptions: UseFetchOptions<T, any, any> = {
        baseURL: BASE_URL,
        method: method || 'GET',
        ...options
      }
      if (method === 'GET') {
        newOptions.query = data
      } else {
        newOptions.body = data
      }
      useFetch<T>(url, newOptions as any)
        .then(res => {
          resolve(res as AsyncData<T, any>)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  get<T>(url: string, data?: any, options?: UseFetchOptions<T, any, any>) {
    return this.request<T>(url, 'GET', data, options)
  }

  post<T>(url: string, params?: any, options?: UseFetchOptions<T, any, any>) {
    return this.request<T>(url, 'POST', params, options)
  }
}

export default new RXRequest()
