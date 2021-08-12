/*
 * @Author: Stevie
 * @Date: 2021-07-30 17:09:54
 * @LastEditTime: 2021-08-12 15:21:06
 * @LastEditors: Stevie
 * @Description:
 */
export interface IChapter {
  chapterId: string;
  name: string;
  display: boolean;
  modules: {
    [key: string]: string
  }
}

export interface IChapterMap {
  [name: string]: IChapter
}

export const chapterMap: IChapterMap = {
  utilityTypes: {
    chapterId: 'UtilityTypes',
    name: 'Utility Types',
    display: true,
    modules: {
      prepend: '前置知识',
      objectUtility: '对象工具类型',
      setUtility: '集合工具类型',
      functionUtility: '函数工具类型'
    }
  }
}