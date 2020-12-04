import { CrowllerController, LoginController} from '../controller';

export enum Methods {
  get = 'get',
  post = 'post'
}

// 工厂函数，封装请求方法
function getRequestDecorator(type: Methods) {
  return function (path: string) {
    return function(target: CrowllerController | LoginController, key: string, descriptor: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', type, target, key);
    }
  }
}

export const get = getRequestDecorator(Methods.get);
export const post = getRequestDecorator(Methods.post);
