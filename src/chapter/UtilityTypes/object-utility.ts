/*
 * @Author: Stevie
 * @Date: 2021-08-02 21:45:51
 * @LastEditTime: 2021-08-03 15:48:11
 * @LastEditors: Stevie
 * @Description: 对象工具类型
*/
interface IOriginalType {
  prop1: string;
  prop2: number;
  prop3: boolean;
}
// - 1. Partial<Type>: 所有属性变成可选属性, [ˈpɑːrʃl]
type TPartial = Partial<IOriginalType>
// 自定义Partial
type Custom_Partial<T> = {
  [K in keyof T]?: T[K];
}
type TPartial2 = Custom_Partial<IOriginalType>

interface IPartialType {
  propA?: string;
  propB: number;
  propC?: boolean;
}
// - 2. Required<Type>: 所有的可选属性变成必需属性
type TRequired = Required<IPartialType>
// 自定义Required
type Custom_Required<T> = {
  [K in keyof T]-?: T[K];
}
type TRequired2 = Custom_Required<IPartialType>

// - 3. Readonly<Type>: 所有属性变成只读属性
type TReadonly = Readonly<IOriginalType>
const readonly: TReadonly = {
  prop1: 'readonly',
  prop2: 100,
  prop3: true
}
// readonly_obj.prop1 = '';
console.log('readonly value:>> ', readonly);
// 自定义Readonly
type Custom_Readonly<T> = {
  readonly [K in keyof T]: T[K];
}
type TReadonly2 = Custom_Readonly<IOriginalType>

// - 4. Record<Keys,Type>: 构造一个属性为keys, key的类型为type的对象类型
type FruitName = 'strawberry' | 'grape' | 'watermelon'
type SugerDegree = 'low' | 'medium' | 'high'
type FruitProps = {
  color: string;
  sugerDegree: SugerDegree
}
type loveFruits = Record<FruitName, FruitProps>
const loveFruits: loveFruits = {
  strawberry: {
    color: 'red',
    sugerDegree: 'low'
  },
  grape: {
    color: 'purple',
    sugerDegree: 'high'
  },
  watermelon: {
    color: 'green',
    sugerDegree: 'medium'
  }
}
console.log('love fruits :>> ', loveFruits);

// 自定义Record
type Custom_Record<Key extends string | number | symbol, T> = {
  [K in Key]: T;
}
type loveFruit2 = Custom_Record<FruitName, FruitProps>
interface LikeFruit {
  apple: string;
  banana: string;
}
type Keys = keyof any;
// * tips: 当传入interface时需要用keyof关键字转为Keys类型
const likeFruits: Custom_Record<keyof LikeFruit, FruitProps> = {
  banana: {
    color: 'yellow',
    sugerDegree: 'high'
  },
  apple: {
    color: 'pink',
    sugerDegree: 'medium'
  }
}
console.log('like fruits :>> ', likeFruits);