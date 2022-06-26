/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-06-26 20:05:44
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-06-26 20:05:51
 * @FilePath: /ts-axios/examples/simple/app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})