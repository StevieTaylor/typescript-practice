/*
 * @Author: Stevie
 * @Date: 2021-07-30 16:25:55
 * @LastEditTime: 2021-07-30 18:17:16
 * @LastEditors: Stevie
 * @Description: 主入口文件
 */
import { firstUpperCase } from "./utils"
import { chapterMap, IChapterMap, IChapter } from './chapter/config'
import './styles/index.less'

const rootNode = document.getElementById('root')
const titleNode = document.createElement('h1')
titleNode.innerHTML = 'Typescript'
titleNode.className = 'title'
rootNode?.appendChild(titleNode)

/**
 * @description: 加载章节
 * @param {*} chapterMap
 * @return {*}
 */
function loadChapter(chapterMap: IChapterMap): void {
  for (const key in chapterMap) {
    if (Object.hasOwnProperty.call(chapterMap, key) && chapterMap[key].display) {
      const container = document.createElement('div')
      container.className = key
      const subtitleNode = document.createElement('h2')
      subtitleNode.innerHTML = chapterMap[key].name
      container.appendChild(subtitleNode)
      const ulistNode = document.createElement('ul')
      ulistNode.id = firstUpperCase(key)
      container.appendChild(ulistNode)
      rootNode?.appendChild(container)
    }
  }
}

/**
 * @description: 加载模块
 * @param {*} modules
 * @param {*} chapterId
 * @return {*}
 */
function loadModule(chapter: IChapter): void {
  const { modules, chapterId } = chapter
  const chapterNode = document.getElementById(`${chapterId}`)
  for (const key in modules) {
    if (Object.hasOwnProperty.call(modules, key)) {
      const liNode = document.createElement('li')
      const anchorNode = document.createElement('a')
      anchorNode.innerHTML = modules[key]
      anchorNode.href = `#${key}`
      anchorNode.rel = 'noopener'
      anchorNode.className = 'module'
      anchorNode.addEventListener('click', () => {
        const moduleName = key.replace(/([A-Z])/g, '-$1').toLowerCase()
        import(`./chapter/${chapterId}/${moduleName}`)
          .then((res) => {
            res && console.log(`%cModule [${moduleName}] load successfully...`, 'color:#28DF99')
          })
          .catch((err) => {
            err && console.error(`%cModule [${moduleName}] load failed...`, 'color:#E8505B')
          })
      })
      liNode.appendChild(anchorNode)
      chapterNode?.appendChild(liNode)
    }
  }
}
loadChapter(chapterMap)
for (const chapter in chapterMap) {
  loadModule(chapterMap[chapter])
}