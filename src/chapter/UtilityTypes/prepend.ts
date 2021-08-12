/*
 * @Author: Stevie
 * @Date: 2021-08-12 15:15:07
 * @LastEditTime: 2021-08-12 17:06:07
 * @LastEditors: Stevie
 * @Description:
 */
/**
 * - keyof 索引查询: 对应任何类型T,keyof T的结果为该类型上所有public公有属性key的联合
 */
interface Person {
  name: string;
  age: number;
  gender: string;
}
type PersonProp = keyof Person;

class Staff {
  readonly id!: number;
  public name!: string;
  protected age!: number;
  private gender!: string;
  static company = 'Byte Dance'
}
// StaffProp = 'id' | 'name'
type StaffProp = keyof Staff;

/**
 * - T[K] 索引访问: T[keyof T]的方式，可以获取到T所有key的类型组成的联合类型
 */
type Name = Person['name']
type NameAndAge = Person['name' | 'age']
type keyUnion = Person[keyof Person]
// type NotExist = Person['name' | 'position']

/**
 * - 交叉类型&: 取的多个类型的并集，但是如果相同key但是类型不同，则该key为never
 */
type Car = {
  name: string;
  price?: string;
}
type House = {
  name: string;
  price?: number;
  height: number;
}
type Property = Car & House;
const property: Property = {
  name: '财产',
  height: 3,
  // price: (() => { throw new Error('error') })()
}










