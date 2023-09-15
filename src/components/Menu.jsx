import React from 'react'
import Link from 'next/link'

import MenuPost from './MenuPost'
import { CategoryList, DemoPosts } from '@/constant'

const Menu = () => {
  return (
    <div className='basis-1/3 mt-14  ' >
      <h2 className='text-xs mb-1' >What's Hot</h2>
      <h1 className='text-xl font-semibold text-black dark:text-slate-400 ' >
        Most Popular
      </h1>
      <div className='mt-8 mb-11 flex flex-col gap-8 ' >
        {DemoPosts.map((item, i) => (
          <MenuPost
            key={i}
            author={item.author}
            category={item.category} bgColor={item.color}
            withImage={false}
          />
        ))}
      </div>
      <h2>Discover by Topic</h2>
      <h1>Categories</h1>
      <div className='mt-4 mb-14 flex flex-wrap gap-5 ' >
        {CategoryList.map((item, i) => (
          <Link key={i} href={'/'} style={{ backgroundColor: item.color }}
            className='px-3 py-2 rounded-lg text-xs'
          >
            {item.title}
          </Link>
        ))}
      </div>
      <h2 className={'text-base font-normal text-gray-400 '}>Chosen by the editor</h2>
      <h1 className={'text-2xl'}>Editors Pick</h1>
      <div className='mt-8 mb-11 flex flex-col gap-8 ' >
        {DemoPosts.map((item, i) => (
          <MenuPost
            key={i}
            author={item.author}
            category={item.category} bgColor={item.color}
            withImage
          />
        ))}
      </div>
    </div>
  )
}

export default Menu