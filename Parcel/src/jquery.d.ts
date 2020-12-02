// .d.ts 文件的作用
// ts 文件不理解 js 库，.d.ts 用于翻译 js 库，帮助 ts 文件理解 js 库

// // declare 定义一个全局变量
// declare var $: (param: () => void) => void;


// interface JqueryInstance {
//   html: (html: string) => JqueryInstance;
// }
// // declare 定义全局函数
// declare function $(readyFunc: () => void): void 
// // 函数重载
// declare function $(selector: string): JqueryInstance
// // 用 namespace 对对象进行类型定义，以及对类进行类型定义，可以命名空间嵌套
// declare namespace $ {
//   namespace fn {
//     class init {}
//   }
// }


// 使用 interface 实现函数重载
// interface JQuery {
//   (readyFunc: () => void): void;
//   (selector: string): JqueryInstance;
// }

// declare var $: JQuery;

// 模块化 .d.ts
declare module 'jquery' {
  interface JqueryInstance {
    html: (html: string) => JqueryInstance;
  }
  // $ 混合类型
  function $(readyFunc: () => void): void 
  // 函数重载
  function $(selector: string): JqueryInstance
  // 用 namespace 对对象进行类型定义，以及对类进行类型定义，可以命名空间嵌套
  namespace $ {
    namespace fn {
      class init {}
    }
  }
  export = $;
}