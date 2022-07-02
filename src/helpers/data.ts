/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-06-28 22:35:01
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-07-02 21:15:28
 * @FilePath: /ts-axios/src/helpers/data.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { isPlainObject } from './utils'

export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // do nothing
    }
  }
  return data
}
