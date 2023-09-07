'use client'
import type { Props } from '../../../vue-web-components/src/views/TodoListSearch/type'
import { useEffect, useRef } from 'react'
import { register } from '../../../vue-web-components/dist/vue-web-components.mjs'
register()
export default function Page() {
  useEffect(() => {
    refCE.current.addEventListener('change', (e) => {
      console.log(e.detail)
    })
    return () => {
      refCE.current.removeEventListener('change')
    }
  }, [])
  interface CEType extends Props {}

  const refCE = useRef<any>()
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

  return (
    <div>
      <todo-list-search
        onChange={inputChange}
        ref={refCE}
        id="ce"
        disabled
        title="hahah"
        options=""
      ></todo-list-search>
      <div>
        <button onClick={onChangeState}>change</button>
      </div>
      <div>
        <button onClick={autoSearch}>我想搜买东西</button>
      </div>
    </div>
  )
}
