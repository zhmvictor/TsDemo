// 命名空间叫Components,会生成一个名叫Components的全局变量
// namespace Components {
//   export class Header {
//     constructor() {
//       const ele = document.createElement('div');
//       ele.innerText = 'This is Header';
//       document.body.appendChild(ele);
//     }
//   }
  
//   export class Content {
//     constructor() {
//       const ele = document.createElement('div');
//       ele.innerText = 'This is Content';
//       document.body.appendChild(ele);
//     }
//   }
  
//   export class Footer {
//     constructor() {
//       const ele = document.createElement('div');
//       ele.innerText = 'This is Footer';
//       document.body.appendChild(ele);
//     }
//   }
// }



export class Header {
  constructor() {
    const ele = document.createElement('div');
    ele.innerText = 'This is Header';
    document.body.appendChild(ele);
  }
}

export class Content {
  constructor() {
    const ele = document.createElement('div');
    ele.innerText = 'This is Content';
    document.body.appendChild(ele);
  }
}

export class Footer {
  constructor() {
    const ele = document.createElement('div');
    ele.innerText = 'This is Footer';
    document.body.appendChild(ele);
  }
}