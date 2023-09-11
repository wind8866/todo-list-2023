'use client'
import type { Props } from '../../vue-web-components/src/views/TodoListSearch/type'
import { PropsWithChildren, useEffect, useRef } from 'react'
import { register } from '../../vue-web-components/dist/vue-web-components.mjs'
register()
export default function Page(props: PropsWithChildren<Props>) {
  const refCE = useRef<any>()
  useEffect(() => {
    console.dir(refCE.current)
    // refCE.current._instance vue实例
    // refCE.current.shadowRoot
    refCE.current.addEventListener('change', (e) => {
      console.log(e.detail)
    })
    return () => {
      refCE.current.removeEventListener('change')
    }
  }, [])

  function onChangeState() {
    const newOptions = {
      title: 'web 页面的 title',
      placehold: '请在浏览器输入',
      buttonText: '点击搜索',
    }
    refCE.current.options = newOptions
    refCE.current.disabled = false
  }
  function autoSearch() {
    console.dir(refCE.current)
    // refCE.current._instance.exposed 变成了null？
    refCE.current._instance.exposed.autoInput('买')
  }
  // ❗️不行
  function inputChange(e) {
    console.log(e)
  }
  console.log(props)
  // 只能使用监听器
  useEffect(() => {
    refCE.current.options = props.options
    refCE.current.disabled = props.disabled
  }, [props])
  function changeInnerStyle() {
    // 外部改变内部样式2：
    const styleDOM = document.createElement('style')
    const css = document.createTextNode(
      `h1:before{content: "#";padding-right: 3px;}`,
    )
    styleDOM.appendChild(css)
    refCE.current.shadowRoot.append(styleDOM)
    refCE.current.shadowRoot.querySelector('h1').style = 'font-weight: initial'
  }

  return (
    <div>
      {/* 直接赋值也不好使 */}
      <todo-list-search
        onChange={inputChange}
        ref={refCE}
        id="ce"
        disabled
        title={props.options.title}
        options=""
      >
        {props.children}
      </todo-list-search>
      {/* <div>
        <button
          className="border border-gray-700 border-l-0 bg-green-600 dark:bg-green-800 rounded-r-md text-white px-4 py-2"
          onClick={onChangeState}
        >
          change
        </button>
      </div> */}
      <div>
        <button
          className="border border-gray-700 border-l-0 bg-green-600 dark:bg-green-800 rounded-r-md text-white px-4 py-2"
          onClick={autoSearch}
        >
          我想搜买东西
        </button>
        <button
          className="border border-gray-700 border-l-0 bg-green-600 dark:bg-green-800 rounded-r-md text-white px-4 py-2"
          onClick={changeInnerStyle}
        >
          我想改变内部样式
        </button>
      </div>
    </div>
  )
}
