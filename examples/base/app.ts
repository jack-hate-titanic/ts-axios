/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-06-26 23:28:24
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-06-28 22:43:14
 * @FilePath: /ts-axios/examples/base/app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from '../../src/index';

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})

const arr = new Int32Array([21, 31])

axios({
  method: 'post',
  url: '/base/buffer',
  data: arr
})