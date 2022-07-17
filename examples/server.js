/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-06-26 20:06:13
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-07-17 21:52:38
 * @FilePath: /ts-axios/examples/server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa');
const webpack = require('webpack');
const Router = require('koa-router');
const path = require('path');
const static = require('koa-static');
const koaWebpack = require('koa-webpack');
const chalk = require('chalk');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const simple = new Router();
const base = new Router();
const error = new Router();
const interceptor = new Router();
const router = new Router();
const config = require('./webpack.config');
app.use(bodyParser());

simple.get('/get', ctx => {
  ctx.response.type = 'json';
  ctx.response.body = {
    msg: 'hello world'
  }
})

base.get('/get', ctx => {
  ctx.response.type = 'json';
  ctx.response.body = ctx.request.query;
})

base.post('/post', ctx => {
  ctx.response.type = 'json';
  ctx.response.body = ctx.request.body;
})

error.get('/get', ctx => {
  ctx.response.body = '收到'
})

interceptor.get('/get', ctx => {
  ctx.response.type = 'json';
  ctx.response.body = ctx.request.body;
})

router.use('/simple', simple.routes(), simple.allowedMethods());
router.use('/base', base.routes(), base.allowedMethods());
router.use('/error', error.routes(), error.allowedMethods());
router.use('/interceptor', interceptor.routes(), interceptor.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());


async function start() {
  const compiler = webpack(config);
  try { 
    const middleware = await koaWebpack({
      compiler
    })
    const port = process.env.PORT || 3000;
    app.use(middleware)
    app.use(static(path.join(__dirname)));
    app.listen(port, () => {
      console.log(chalk.red(`启动成功,端口号为${port}`));
    })
  } catch (e) {
    console.log(chalk.red(e))
  }
}
start();
