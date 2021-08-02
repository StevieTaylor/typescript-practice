/*
 * @Author: Stevie
 * @Date: 2021-08-02 21:45:51
 * @LastEditTime: 2021-08-02 21:49:02
 * @LastEditors: Stevie
 * @Description: 对象工具
 */
interface IOrigin {
  name: string;
  age: number;
}

type TPerson = Partial<IOrigin>