interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}
// 联合类型 "|"
// 变量有多种类型用 "|" 表示
// 由于变量有多种类型，所以在调用属性时不确定属性属于哪种类型，所以需要“类型保护”
// 什么是类型保护？
// 类型保护就是判断下调用的属性或方法属于哪个类型，避免调用时报错属性不存在，通俗说就是使用变量前需要检测下变量的类型
// 类型保护的方式：与判断变量类型的方式差不多

// 类型保护有几种方式：
// 1.类型断言方式
function trainAnial1(animal: Bird | Dog) {
  if(animal.fly) {
    (animal as Bird).sing();
  } else {
    (animal as Dog).bark();
  }
}

// 2.in 语法
function trainAnial2(animal: Bird | Dog) {
  if('sing' in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}

// 3.typeof 语法
function add1(first: string | number, second: string | number) {
  if(typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`
  }
  return first + second;
}

// 4.instanceof 语法：当类型是 class 是，可以用 instanceof 语法来做类型保护
class NumberObj {
  count: number;
}
function add2(first: object | NumberObj, second: object | NumberObj) {
  if(first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}