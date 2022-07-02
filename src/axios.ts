/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-07-02 21:39:46
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-07-02 21:41:27
 * @FilePath: /ts-axios/src/axios.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/utils'

function createInstance(): AxiosInstance {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
