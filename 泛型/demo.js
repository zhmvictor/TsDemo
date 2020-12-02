// 泛型 generic
// 泛指的类型，随便指定的类型，你指定什么类型就是什么类型，泛型对应你具体指定的类型
// 优点：提高类型定义灵活性
// 函数中使用泛型
// function join<T, P>(a: T, b: P): T{
//   return a;
// }
var Teacher = /** @class */ (function () {
    function Teacher(info) {
        this.info = info;
    }
    Teacher.prototype.getInfo = function (key) {
        return this.info[key];
    };
    return Teacher;
}());
var teacher = new Teacher({
    name: 'Tom',
    age: 18,
    gender: 'male'
});
var test = teacher.getInfo('name');
console.log(test);
