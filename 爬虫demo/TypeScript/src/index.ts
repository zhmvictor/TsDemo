import express from 'express';
import router from './router';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

// 问题1：express 库的类型定义文件 .d.ts 文件类型描述不准确
// 问题2：当使用中间件的时候，对 req 或者 res 做修改后，实际上类型并不能改变

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({
  name: 'session',
  keys: ['teacher dell'],
  // 存储时长
  maxAge: 24 * 60 * 60 * 1000
}))
app.use(router);

app.listen(3000, () => {
  console.log('server is running');
})