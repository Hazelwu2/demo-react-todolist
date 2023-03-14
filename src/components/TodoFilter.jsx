import { useState } from 'react'

export default function TodoFilter(
  { setTab }
) {

  return (
    <ul className='todolist__tabs'>

      <li>
        <span onClick={() => setTab('all')}
          className='all active'
          href='#'>
          全部
        </span>
      </li>
      <li>
        <span
          onClick={() => setTab('uncompleted')}
          className='no-completed' href='#'>
          待完成
        </span>
      </li>
      <li>
        <span
          onClick={() => setTab('completed')}
          className='completed' href='#'>
          已完成
        </span>
      </li>
    </ul>

  )
}