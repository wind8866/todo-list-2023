'use client'
import type { Props } from '../../../vue-web-components/src/views/TodoListSearch/type'
import { useEffect, useRef, useState } from 'react'
import ToDoSearchCE from '../../components/TodoSearchCE'

export default function Page() {
  const [params, setParams] = useState<Props>({
    disabled: false,
    options: {
      title: 'web 页面的 title',
      placehold: '请在浏览器输入',
      buttonText: '点击搜索',
    },
  })

  function changeDisabled() {
    setParams({
      disabled: !params.disabled,
      options: {
        title: 'web 页面的 title 改变了',
        placehold: '请在浏览器输入 改变了',
        buttonText: '点击搜索 改变了',
      },
    })
  }
  return (
    <div>
      <ToDoSearchCE {...params} />
      <button onClick={changeDisabled}>改变disabled</button>
    </div>
  )
}
