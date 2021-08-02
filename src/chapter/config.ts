/*
 * @Author: Stevie
 * @Date: 2021-07-30 17:09:54
 * @LastEditTime: 2021-08-02 21:49:46
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
      objectUtility: '对象工具'
    }
  }
}