/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-07-17 21:33:50
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-07-17 21:34:31
 * @FilePath: /ts-axios/examples/extend/app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from '../../src/index'

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
})

axios.request({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hello'
  }
})
