/*
 * @Author: Stevie
 * @Date: 2021-07-30 17:09:54
 * @LastEditTime: 2021-07-30 17:20:27
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
  demo: {
    chapterId: 'Demo',
    name: 'demo',
    display: true,
    modules: {
      demo: '范例'
    }
  }
}