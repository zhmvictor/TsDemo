interface Person {
  // 只读属性
  readonly name: string;
  // 可选属性
  age?: number;
  // 额外属性
  [propName: string]: any
}

const getPersonName = (person: Teacher): void => {
  console.log(person.name);
}

const setPersonName = (person: Person, name: string): void => {
  person.name = name;
}
const person = {
  name: 'Tom',
  teach() {
    return ''
  }
}
getPersonName(person);
setPersonName(person, 'Maik');

// 接口实现
class User implements Person {
  name = 'Tom'
}

// 接口继承
interface Teacher extends Person {
  teach(): string
}

// 接口表示函数
interface sayHi {
  // 接收string 类型的参数，返回值也是 string 类型
  (word: string): string
}