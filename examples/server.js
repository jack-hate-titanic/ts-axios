/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-06-26 20:06:13
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-06-26 21:57:55
 * @FilePath: /ts-axios/examples/server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa');
const Router = require('koa-router');
const path = require('path');
const static = require('koa-static');
const app = new Koa();
const simple = new Router();
const router = new Router();

simple.get('/get', ctx => {
  ctx.response.type = 'json';
  ctx.response.body = {
    msg: 'hello world'
  }
})

router.use('/simple', simple.routes(), simple.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());
app.use(static(path.join(__dirname)));
app.listen(3031, () => {
  console.log('成功启动');
})
