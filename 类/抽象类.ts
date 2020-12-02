// 抽象类
abstract class Geom {
  // 抽象方法，只定义，不写具体实现
  abstract getArea(): number;
  // 抽象类里也可以写其他非抽象属性，方法
  width: number;
  getType(): string {
    return 'Geom';
  }
}
// 抽象类不可以被实例化，只能被继承
class Circle extends Geom {
  // 继承抽象类的子类必须实现所继承的抽象方法
  getArea() {
    return this.width;
  }
}

// 抽象类和接口的区别
// 抽象类是把类相关一些通用的方法抽象出来
// 接口是把对象相关的通用方法属性抽象出来
interface Person {
  name: string;
}
// Teacher 和 Student 对象都有公共的 name 属性
// 在使用 name 属性时，为了避免使用写法较为麻烦的联合类型
// 则可以将公共的 name 属性抽象到一个新的接口 Person
interface Teacher extends Person {
  teacheAge: number;
}
interface Student extends Person {
  age: number;
}
const teacher = {
  name: 'teacher',
  teacheAge: 10
};
const student = {
  name: 'student',
  age: 20
};
const getUserInfo = (user: Person): void => {
  console.log(user.name);
}
getUserInfo(teacher);
getUserInfo(student);
