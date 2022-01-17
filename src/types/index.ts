/*
 * @Author: your name
 * @Date: 2022-01-15 11:08:21
 * @LastEditTime: 2022-01-15 11:11:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts-axios/src/types/index.ts
 */
export type Method = 'get' | 'GET' | 'post' | 'POST' | 'put' | 'PUT' | 'delete' | 'delete'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  params?: any
  data?: any
}
