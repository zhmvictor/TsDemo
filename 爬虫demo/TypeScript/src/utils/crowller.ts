// ts 文件直接引 js 包会报错
// 需要下载 @type/包
// 翻译过程：ts -> .d.ts(翻译文件) -> js 

import superagent from 'superagent';
import fs from 'fs';
import path from 'path';

export interface Analyzer {
  analyze: (html: string, filePath: string) => string;
}

// 本类还有缺陷，由于爬取的url是静态的，太单一，不够灵活，故将本类拆分
// Crowller 类负责通用的部分（爬取功能）
// 定义其他类负责针对性分析需要爬取的页面
// 此拆分方法运用了“组合设计模式”优化代码
class Crowller {
  private filePath = path.resolve(__dirname, '../../data/course.json');

  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess();
  }

  private async initSpiderProcess() {
    // 抓取网页html信息
    const html = await this.getRawHtml();
    // 分析网页信息
    const fileContent = this.analyzer.analyze(html, this.filePath);
    // 将信息写入文件
    this.writeFile(fileContent);
  }

  private async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }

  private writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }
}

export default Crowller;
