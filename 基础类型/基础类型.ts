/**
 * 布尔型：boolean
 * new Boolean() 返回的不是布尔型，是对象类型
 * Boolean() 返回的是布尔型
 */
let isDone: boolean = Boolean(1);

/**
 * 数值型：number
 * ES6 中的二进制和八进制表示法会被编译为十进制数字
 */
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;

/**
 * 字符串：string
 */
let myName: string = 'Tom';

/**
 * 空值： void
 * 没有任何返回值的函数可以用 void 表示
 * void 类型的变量只能赋值 null 和 undefined
 */
function alertName(): void {
  alert('My name is Tom');
}
let unusable: void = null;

/**
 * undefined 和 null
 * undefined 和 null 是所有类型的子类型，该类型的变量可以给其他原始类型的变量赋值
 * 
 * 注意：void 类型的变量虽然可以被赋值 null 和 undefined，但是它们不是 null 和 undefined 类型，注意区分。
 */
let u: undefined = null;
let n: null = undefined;
let num: number = u;

/**
 * 任意值：any
 * 允许被赋值为任意类型
 * 允许访问其上任何属性
 * 允许调用其上任何方法
 * 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
 * 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
 */
let anyThing: any = 'hello';
anyThing.setName('Jerry');
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

/**
 * 类型推论
 * 1. 若变量定义时未被赋值，则不管之后是否赋值，都会被推断为 any 类型
 * 2. 若变量定义时有赋值，但未被指定类型，会根据变量的值推断类型
 */
let myValue = 'seven'; // => let myValue: string = 'seven';

/**
 * 联合类型：|
 * 取值可以为多种类型中的一种，用 “|” 分隔
 * 只能访问联合类型的所有类型里共有的属性或方法
 */
function getString(something: string | number): string {
  return something.toString();
}

/**
 * 对象类型：使用接口定义
 * 
 * 接口：interface
 * - 对类的一部分行为的抽象
 * - 描述对象的形状（变量的形状必须与接口形状保持一致）
 * - 可选属性
 *    - 不完全匹配形状，可以在接口定义可选属性，可选属性可以不存在
 * - 任意属性
 *    - 属性名的类型可以是 string 或 number 类型，这和 JavaScript 对象属性名的特性相关
 *    - 确定属性类型和可选属性类型必须是任意属性类型的子集，因为任意属性就包含了这两种属性
 *    - 一个接口只能定义一个任意属性，若接口有多个类型的属性，可以在任意属性中使用联合类型
 * - 只读属性 readonly
 *    - 只能在对象创建时被赋值
 *    - 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
 */
interface Person {
  readonly id: number;
  name: string;
  age: number;
  gender?: string; // 可选属性
  [propName: string]: string | number | any; // 任意属性，也叫“字符串索引签名”
}

let tom: Person = {
  id: 1234,
  name: 'Tom',
  age: 25
};

/**
 * 数组的类型
 * 1. 类型 + 括号（类型约束的是数组元素项的类型，数组一些方法的参数类型也会因此受限）
 * 2. 数组泛型
 * 3. 用接口表示数组（不常用）
 * 
 * 常用接口表示类数组
 * 常用的类数组都有自己的接口定义
 * 
 * 用 any 表示数组允许出现任意类型
 */
let arr: number[] = [1,2,3,4];
arr.push(5); // 参数只能是 number 类型

interface NumberArray {
  [index: number]: number;
}
let arr1: NumberArray = [1,2,3,4];

// 使用接口表示类数组
function sum() {
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}

let list: any[] = [1, '2', { name: 'Tom' }];

/**
 * 函数的类型
 * 1. 函数声明
 * 2. 函数表达式
 * 3. 使用接口定义函数的类型
 * 
 * 可选参数：可选参数后面不允许再出现必需参数了
 * 参数默认值：TypeScript 会将添加了默认值的参数识别为可选参数，此时就不受「可选参数必须接在必需参数后面」的限制
 * 剩余参数（rest 参数）：参考 ES6 中的 rest 参数
 * 重载：同一个函数处理不同情况
 */
// 函数声明
function add(x: number, y: number): number {
  return x + y;
}
// 函数表达式
let mySum: (x: number, y: number) => number = function(x: number, y:number): number {
  return x + y;
}
// 使用接口定义函数类型
interface searchFunc {
  (source: string, substring: string): boolean;
}
let mySearch: searchFunc = function(source, substring) {
  return source.search(substring) !== -1;
}
// rest 参数
function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
    array.push(item); 
  });
}
// 重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}

/**
 * 类型断言
 * 1. 值 as 类型
 * 2. <类型>值
 */
