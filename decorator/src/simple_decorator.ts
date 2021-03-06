// 类的装饰器
/**
 * 1. 什么是“类的装饰器”？
 * 装饰器是对类的修饰的工具，类似于女生化妆，用装饰器给类化妆，对类增加些额外的修饰。
 * 装饰器本身是一个函数。
 * 
 * 2. 有什么用处？好处？
 * 对类增加些额外的修饰（扩展）
 * 3. 怎么修饰？
 * - 类装饰器接收的参数是类的构造函数
 * - 装饰器通过 @ 符号来使用
 * - 多个类的装饰器按照从右到左，从下到上的顺序执行
 * 4. 装饰器的运行时机
 * 在类定义时立即执行，而不是在类实例化后执行
 */

// 工厂函数
// 在普通装饰器外面包装一层函数，可以增加判断逻辑
// function testDecorator(flag: boolean) {
//   if(flag) {
//     return function(constructor: any) {
//       constructor.prototype.getName = () => {
//         console.log(123);
//       }
//     }
//   } else {
//     return function(constructor: any) {}
//   }
// }


// function testDecorator1(constructor: any) {
//   // constructor.prototype.getName = () => {
//   //   console.log(123);
//   // }
//   console.log('testDecorator');
// }
// function testDecorator2(constructor: any) {
//   console.log('testDecorator1');
// }

// @testDecorator(false)
// class Test {}

// const test = new Test();
// (test as any).getName();