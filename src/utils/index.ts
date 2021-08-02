/*
 * @Author: Stevie
 * @Date: 2021-08-02 15:54:13
 * @LastEditTime: 2021-08-02 15:56:56
 * @LastEditors: Stevie
 * @Description: 
 */
/**
 * @description: 字符串首字母大写
 * @param {*} str
 * @return {*}
 */
export function firstUpperCase(str: string): string {
  return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
}

/**
 * @description: 简易版深拷贝
 * @param {*} target
 * @return {*}
 */
export function deepCopy(target: any): any {
  if (typeof target !== 'object') {
    return
  }
  let result = target instanceof Array ? [] : {}
  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      target[key] = typeof target[key] === 'object' ? deepCopy(target[key]) : target[key]
    }
  }
  return result
}