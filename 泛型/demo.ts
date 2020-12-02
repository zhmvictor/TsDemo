// 泛型 generic
// 泛指的类型，随便指定的类型，你指定什么类型就是什么类型，泛型对应你具体指定的类型
// 优点：提高类型定义灵活性
// 函数中使用泛型
// function join<T, P>(a: T, b: P): T{
//   return a;
// }

// // 类中使用泛型
// interface Item {
//   name: string;
// }
// // 泛型可以继承
// class DataManager<T extends Item> {
//   constructor(private data: T[]) {}
//   getItem(index: number): string {
//     return this.data[index].name;
//   }
// }

// function hello<T>(params: T) {
//   return params;
// }
// const func: <T>(params: T) => T = hello;


interface Person {
  name: string;
  age: number;
  gender: string;
}

class Teacher {
  constructor(private info: Person) {}
  // 泛型中的 keyof 语法，类似于遍历
  // key: 'name', type T = 'name', Person['name']
  // key: 'age', type T = 'age', Person['age']
  // key: 'gender', type T = 'gender', Person['gender']
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}
const teacher = new Teacher({
  name: 'Tom',
  age: 18,
  gender: 'male'
});
const test = teacher.getInfo('name');
console.log(test);