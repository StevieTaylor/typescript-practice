/*
 * @Author: Stevie
 * @Date: 2021-08-03 23:47:16
 * @LastEditTime: 2021-08-04 00:03:23
 * @LastEditors: Stevie
 * @Description: 
 */
export type BasicType = number | string | boolean | null | undefined | symbol | bigint;
export type ComplexType = object;
export type ComplexDerivedType = Function | Date | Math | RegExp | Array<any>;
export type TSUniqueType = any | void | unknown | never;