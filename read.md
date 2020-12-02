# TypeScript

## 定义

TypeScript 是 JavaScript 的超集，不会被浏览器（或node环境）直接执行，需要被编译成普通的 JavaScript 才能在浏览器（或node环境）运行。

**什么是超集（superset）？**

TypeScript 除包含 JavaScript 的绝大多数语法特性外，还有自己独特的语法特性。

**类型区别**

- Js 类型是动态类型，运行时能检测报错
- Ts 类型是静态类型，编写代码时就可以检测报错

**什么是静态类型？**

变量类型一旦确定，就不可更改，且变量对应的属性和方法也被确定（这也是为什么编辑器的语法提示更加友好）。

如下代码，变量 age 已经被定义为 number 类型，把字符串类型赋值给 age 时就会报错。
```
let age: number;
age = 'Xiaoming'; // error -> Type 'string' is not assignable to type 'number'.
```
-------------------------

## 优势

为什么要使用 TypeScript，有什么好处呢？

1. Ts 为静态类型，使我们在编写代码时就可以发现错误
2. 编辑器语法提示更友好
3. 由于需要设置类型，使得代码语义更清晰，可读性更好

-------------------------

## tsconfig.json

Ts 编译控制的配置文件

[中文官网配置](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

## 基本类型

## 复杂类型

