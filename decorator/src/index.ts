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
// function testDecorator() {
//   return function <T extends new (...args: any[]) => {}>(constructor: T) {
//     return class extends constructor {
//       name = 'lee';
//       getName() {
//         return this.name;
//       }
//     }
//   };
// }
// const Test = testDecorator()(class {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// });
// const test = new Test('dell');
// console.log(test.getName());


// 方法装饰器
/**
 * 1. 方法装饰器在方法创建时就会被调用
 * 2. 普通方法，target 对应的是类的 prototype
 *    静态方法，target 对应的是类的构造函数
 * 
 */
// function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
//   // console.log(target, key, descriptor.value);
//   // descriptor.writable = true;
//   descriptor.value = () => {
//     return 'descriptor';
//   }
// }
// class Test {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   @getNameDecorator
//   getName() {
//     return this.name;
//   }
// }
// const test = new Test('123');
// console.log(test.getName());



// 访问器的装饰器| 属性装饰器
/**
 * 1.访问器是什么？
 * 类里的 getter 和 setter 就是访问器
 * 2.getter 和 setter 不能同时添加装饰器
 * 
 */
// function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
//   console.log(descriptor);
// }
// class Test {
//   private _name: string;
//   constructor(name: string) {
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   @visitDecorator
//   set name(name:string) {
//     this._name = name;
//   }
// }
// const test = new Test('dell');
// test.name = '123123';
// console.log(test.name);

// 属性装饰器
/**
 * 1.属性装饰器只有两个参数，没有第三个参数属性描述对象
 * 2.属性装饰器修改的是原型上的属性，而无法修改实例上的属性
 */
function nameDecorator(target: any, key: string): any {
  console.log(target, key);
  target[key] = 'xiaoming';
  console.log(target, key);
  // 虽然没有属性描述对象参数，但是可以自己构造
  // 但是这样写会有问题，初始化属性值都不行
  // const descriptor: PropertyDescriptor = {
  //   writable: false,
  // };
  // return descriptor;
}
class Test {
  @nameDecorator
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const test = new Test('Tom');
console.log(test.name);
console.log(Test.prototype.name);



// 参数装饰器
/**
 * 
 *  1.三个参数：原型、方法名、参数位置
 */
// function paramDecorator(target: any, method: string, paramIndex: number) {
//   console.log(target, method, paramIndex);
// }
// class Test {
//   getInfo(name: string, @paramDecorator age: number) {
//     console.log(name, age);
//   }
// }
// const test= new Test();
// test.getInfo('Dell', 30);


// 装饰器例子
// const userInfo: any = undefined;
// // 工厂函数，封装装饰器函数，用于加工装饰器
// function catchError(msg: string) {
//   // 方法装饰器，实现代码复用
//   return function(target: any, key: string, descriptor: PropertyDescriptor) {
//     const fn = descriptor.value;
//     descriptor.value = function() {
//       try {
//         fn();
//       } catch (error) {
//         // 想要灵活控制，显示不同的提示信息
//         // 则可以将装饰器外封装一层工厂函数
//         console.log(msg);
//       }
//     }
//   }
// }
// class Test {
//   @catchError('userInfo.name 不存在')
//   getName() {
//     return userInfo.name;
//   }
//   @catchError('userInfo.age 不存在')
//   getAge() {
//     return userInfo.age;
//   }
// }
// const test = new Test();
// test.getName();