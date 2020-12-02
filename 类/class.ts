// 访问类型： private，proteced, public
// private 允许在类内使用
// public 允许在类外使用
// protected 允许在类内以及子类内使用
// 类中如果不显示声明，则默认访问类型为 public
// 类
class Person {
  // 构造器，在实例创建时被执行
  // 写法一
  // // 定义属性
  // public name: string;
  // constructor(name: string) {
  //   // 为属性赋值
  //   this.name = name;
  // }
  // 写法二：简写
  constructor(public name: string) {}
  getName() {
    return this.name;
  }
}
// 类继承
class User extends Person {
  constructor(public age: number) {
    // super() 相当于调用父类构造器
    super('Make')
  }
  // 重写父类方法
  getName() {
    // super 作用
    // 当子类重写父类方法时，还想继续使用父类方法，则用 super 调用父类方法
    return super.getName() + 'Jane';
  }
  getUserName() {
    return this.name;
  }
}
// const person = new Person('Tom');
// console.log(person.name);
// const user = new User(28);
// console.log(user.name);
// console.log(user.age);
// console.log(user.getName());
// console.log(user.getUserName());

// 静态属性 Getter 和 Setter
// 作用：保护私有属性
class Fruit {
  constructor(private _name: string) {}
  get name() {
    return this._name + 'Apple';
  }
  set name(name: string) {
    this._name = name;
  }
}
// const fruit = new Fruit('One');
// console.log(fruit.name);
// fruit.name = 'Two';
// console.log(fruit.name);


// 模拟单例模式
class Demo {
  private static instance: Demo;
  private constructor(public name: string) {}
  static getInstance(name: string) {
    // 类的静态方法中的 this 指向类，即 Demo
    // 类的普通方法中的 this 指向类的实例，参考 getName 方法
    if(!this.instance) {
      this.instance = new Demo(name);
    }
    return this.instance;
  }
  getName() {
    return this.name;
  }
}
const demo1 = Demo.getInstance('one');
const demo2 = Demo.getInstance('two');

// console.log(demo1.name);
// console.log(demo2.name);

// 抽象类

