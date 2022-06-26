/*
 * @Author: your name
 * @Date: 2022-01-15 11:03:08
 * @LastEditTime: 2022-06-25 21:22:31
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts-axios/src/index.ts
 */
import { AxiosRequestConfig } from './types'
import xhr from './xhr'
function axios(config: AxiosRequestConfig): void {
  xhr(config)
}

export default axios
