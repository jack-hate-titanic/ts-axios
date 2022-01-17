/*
 * @Author: your name
 * @Date: 2022-01-15 11:15:57
 * @LastEditTime: 2022-01-15 11:18:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts-axios/src/xhr.ts
 */
import { AxiosRequestConfig } from './types'

function xhr(config: AxiosRequestConfig) {
  const { url, data = null, method = 'get' } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send()
}

export default xhr
