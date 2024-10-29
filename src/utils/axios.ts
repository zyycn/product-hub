import axios from 'axios'
import qs from 'qs'
import { ElNotification } from 'element-plus'

import type * as Axios from 'axios'

interface RequestConfig extends Axios.InternalAxiosRequestConfig {
  cancelTokenFlag?: boolean
}

export default class HttpRequest {
  // Axios实例
  public axiosInstance: Axios.AxiosInstance
  // 默认配置
  private defaultAxiosConfig: Axios.AxiosRequestConfig = {
    timeout: 1000 * 60 * 5,
    withCredentials: true
  }
  // 请求队列
  private reqPendingMap = new Map()

  constructor(config: Axios.AxiosRequestConfig) {
    this.axiosInstance = axios.create({ ...this.defaultAxiosConfig, ...config })
    this.setupInterceptors()
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config: RequestConfig) => {
        // 请求时间戳
        config.params._t = Date.now()

        // 格式化数组参数，id=[1,2] => id=1&id=2
        config.paramsSerializer = {
          serialize: params => qs.stringify(params, { arrayFormat: 'repeat' })
        }

        // 重复取消请求
        if (config.cancelTokenFlag) {
          const controller = new AbortController()
          config.signal = controller.signal

          const reqKey = `${config.method?.toUpperCase()}:${config.url}`

          const cancel = this.reqPendingMap.get(reqKey)
          if (cancel) cancel.abort()

          this.reqPendingMap.delete(reqKey)
          this.reqPendingMap.set(reqKey, controller)
        }

        return config
      },
      (error: Axios.AxiosError) => {
        throw Promise.reject(error)
      }
    )

    this.axiosInstance.interceptors.response.use(
      (response: Axios.AxiosResponse) => {
        const { data, config } = response

        if (data.code !== '0000') {
          ElNotification({
            title: '错误',
            message: data.msg,
            type: 'error'
          })
          throw Promise.reject(data)
        }

        if ((config as RequestConfig).cancelTokenFlag) {
          // 删除已取消的请求
          const reqKey = `${config.method?.toUpperCase()}:${config.url}`
          this.reqPendingMap.delete(reqKey)
        }

        return response
      },
      error => {
        // 判断是否是取消请求
        if (axios.isCancel(error)) {
          this.reqPendingMap.delete(error.message)
          return Promise.reject(error)
        }

        const { code, message } = error || {}
        const err: string = error?.toString?.() ?? ''
        let errMessage = ''

        try {
          if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
            errMessage = '接口请求超时,请刷新页面重试!'
          }
          if (err?.includes('Network Error')) {
            errMessage = '网络异常，请检查您的网络连接是否正常!'
          }

          if (errMessage) {
            ElNotification({
              title: '错误',
              message: errMessage,
              type: 'error'
            })
            return Promise.reject(error)
          }
        } catch (error) {
          throw new Error(error as string)
        }

        throw Promise.reject(error)
      }
    )
  }
}
