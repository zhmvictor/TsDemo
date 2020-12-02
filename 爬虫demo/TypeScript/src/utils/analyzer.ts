import cheerio from 'cheerio';
import fs from 'fs';
import { Analyzer } from './crowller';

// 定义课程接口
interface Course {
  title: string;
  count: number;
}
// 定义课程爬取结果结构接口
interface CourseResult {
  // 数值类型的时间戳
  time: number;
  // Course 类型的数组
  data: Course[];
}
// 定义课程存库内容结构接口
interface Content {
  [propName: number]: Course[]
}

/**
 * 希望将 DellAnalyzer 变成单例模式
 * 单例模式要求类不能被外部实例化
 */

// 对类进行约束，要求每一个分析器里都要有一个符合 Analyzer 类型的 analyze 方法
export default class DellAnalyzer implements Analyzer {
  // 将构造器设置为私有，就不能被外部实例化了
  private constructor() {}

  // 定义静态属性
  private static instance: DellAnalyzer;

  static getInstance() {
    if(!DellAnalyzer.instance) {
      DellAnalyzer.instance = new DellAnalyzer();
    }
    return DellAnalyzer.instance;
  }

  // 文件分析
  public analyze(html: string, filePath: string) {
    // 分析抓取到的html信息
    const courseInfo = this.getCourseInfo(html);
    // 将课程信息处理为入库数据结构
    const fileContent = this.generateJsonContent(courseInfo, filePath);
    return JSON.stringify(fileContent);
  }

  private getCourseInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $('.course-item');
    const courseInfos: Course[] = [];
    // cheerio 自己的 map api，与 js 数组的 map 参数恰好反了
    courseItems.map((index, ele) => {
      const descs = $(ele).find('.course-desc');
      const title = descs.eq(0).text();
      // 中文冒号
      const count = parseInt(descs.eq(1).text().split('：')[1], 10);
      courseInfos.push({
        title,
        count
      });
    });
    const result = {
      time: new Date().getTime(),
      data: courseInfos
    };
    return result;
  }

  private generateJsonContent(courseInfo: CourseResult, filePath: string) {
    let fileContent: Content = {};
    // 如果文件里有数据，则把文件读取出来，存到 fileContent
    // 整合新内容和旧内容
    if(fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    fileContent[courseInfo.time] = courseInfo.data;
    return fileContent;
  }
}


