import 'reflect-metadata';

// const user = {
//   name: 'dell'
// };
// // 需求：想要在 user 对象上存储一些元数据，但是在打印 user 时又不被看到
// // 定义
// Reflect.defineMetadata('data', 'test', user);
// // 取值
// let value = Reflect.getOwnMetadata('data', user)
// console.log(value);

// @Reflect.metadata('data', 'test')
// class User {
//   @Reflect.metadata('data', 'test')
//   name = 'dell';
//   @Reflect.metadata('data', 'get')
//   @Reflect.metadata('data1', 'get')
//   getName() {
//     return this.name;
//   }
// }

// class Teacher extends User {}
// console.log(Reflect.getMetadata('data', User.prototype, 'name'));

/**
 * 装饰器的执行顺序
 * 1. 类的方法的装饰器优先于类的装饰器执行
 * 2. Reflect.metaData 原理与 setData 相似
 */

function showData(target: typeof User) {
  for(let key in target.prototype) {
    const data = Reflect.getMetadata('data', target.prototype, key);
    console.log(data);
  }
}

function setData(dataKey: string, msg: string) {
  return function(target: User, key: string) {
    Reflect.defineMetadata(dataKey, msg, target, key);
  }
}

@showData
class User {
  @Reflect.metadata('data', 'name')
  getName() {}

  @setData('data', 'age')
  getAge() {}
}