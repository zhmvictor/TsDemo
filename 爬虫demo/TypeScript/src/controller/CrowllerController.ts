import fs from 'fs';
import path from 'path';
import 'reflect-metadata';
import { Request, Response, NextFunction } from 'express';
import { controller, use, get } from '../decorator';
import { getResponseData } from '../utils/util';
import Crowller from '../utils/crowller';
import Analyzer from '../utils/analyzer';

interface BodyRequest extends Request {
  body: { [propName: string]: string | undefined }
}

const checkLogin = (req: Request, res: Response, next: NextFunction): void => {
  const isLogin = !!(req.session ? req.session.login : false);
  if(isLogin) {
    next();
  } else {
    res.json(getResponseData(null, '请先登录'));
  }
  console.log('checkLogin middleware');
}


const test = (req: Request, res: Response, next: NextFunction): void => {
  console.log('test middleware');
  next();
}

@controller('/')
export class CrowllerController {
  @get('/getData')
  @use(checkLogin)
  @use(test)
  getData(req: BodyRequest, res: Response): void {
    // 爬取秘钥，去官方git看下
    const secret = 'x3b174jsx';
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
    // const analyzer = new DellAnalyzer();
    // 将DellAnalyzer改为单例模式
    const analyzer = Analyzer.getInstance();
    new Crowller(url, analyzer);
    res.json(getResponseData(true));
  }

  @get('/showData')
  @use(checkLogin)
  showData(req: BodyRequest, res: Response): void {
    try {
      const filename = path.resolve(__dirname, '../../data/course.json');
      const result = fs.readFileSync(filename, 'utf-8');
      res.json(getResponseData(JSON.parse(result)));
    } catch (e) {
      res.json(getResponseData(false, '数据不存在'));
    }
  }
}