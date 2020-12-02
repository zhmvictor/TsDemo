// 命名空间 namespace
// 什么是命名空间？ 类似模块的思想
// 命名空间的作用？
// export 的用法？
// 命名空间要配合 export 使用？

// 命名空间的引用关系，用三斜杠语法

// ///<reference path="./components.ts" />
// namespace Home {
//   export class Page {
//     constructor() {
//       new Components.Header();
//       new Components.Content();
//       new Components.Footer();
//     }
//   }
// }

import { Header, Content, Footer } from './components';

export class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}