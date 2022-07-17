/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-06-26 23:28:24
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-07-17 17:45:58
 * @FilePath: /ts-axios/examples/base/app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from '../../src/axios';

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
}).then((res) => {
  console.log(res);
})

axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 3,
    b: 4
  }
}).then((res) => {
  console.log(res)
})