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
        hotWords: ['买菜', '打卡'],
      },
    })
  }
  return (
    <div>
      <ToDoSearchCE {...params}>
        {params.options.hotWords?.map((word) => (
          <span
            className="bg-orange-400"
            style={{
              background: '#eee',
              padding: '0.1em 0.3em',
              border: '1px solid #999',
              borderRadius: '4px',
              marginRight: '0.5em',
            }}
            key={word}
          >
            {word}
          </span>
        ))}
      </ToDoSearchCE>
      <button
        className="border border-gray-700 border-l-0 bg-green-600 dark:bg-green-800 rounded-r-md text-white px-4 py-2"
        onClick={changeDisabled}
      >
        改变所有值
      </button>
    </div>
  )
}
