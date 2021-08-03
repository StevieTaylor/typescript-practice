/*
 * @Author: Stevie
 * @Date: 2021-08-03 11:33:50
 * @LastEditTime: 2021-08-03 23:56:29
 * @LastEditors: Stevie
 * @Description: 集合工具类型
 */
// - 1. Pick<Type, Keys>: 从Type中 挑选 出一组符合Keys的属性
interface Todo {
  title: string;
  completed: boolean;
  description: string;
  createdTime: Date;
  expiredTime: Date;
}
type TodoPreview = Pick<Todo, 'title' | 'completed'>
// * 自定义Pick, 约束 K 来自于 T
type Custom_Pick<T, K extends keyof T> = {
  [P in K]: T[P];
}
type TodoPreview2 = Custom_Pick<Todo, 'title' | 'completed'>

// - 2. Omit<Type, Keys>: 从Type中 省略 掉符合keys的属性, [əˈmɪt]
type TodoDisplay = Omit<Todo, 'createdTime'>

// - T : interface
// - keyof T : keys
// - P: keys中的key
// - T[P]: key的类型
type Custom_Omit<T, K> = {
  [P in keyof T]: P extends K ? never : T[P]
}
type TodoDisplay2 = Custom_Omit<Todo, 'createdTime'>

type BasicType = number | string | boolean | null | undefined | symbol | bigint;
type ComplexType = object | Function | Array<any> | Date;

// - 3. Exclude<Type, ExcludedUnion>: 从 Type 出 排除 
type FuncVoid = (...args: any[]) => void;
type FuncPromise = (...args: any[]) => Promise<void>;
type NonFunction = Exclude<string | number | FuncVoid | FuncPromise, Function>

type Custom_Exclude<T, E extends keyof T> = {

}

// - 4. Extract<Type, Union>: 从 Type 中 提取 包含有 union 的类型
type Func = Extract<string | number | FuncVoid | FuncPromise, Function>
