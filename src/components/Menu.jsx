import React from 'react'

import MenuPost from './MenuPost'
import Link from 'next/link'

const dummyPosts = [
  { author: 'Donny', category: 'travel', color: '#ff7857' },
  { author: 'Carlos', category: 'coding', color: '#775aec' },
  { author: 'Yassine', category: 'food', color: '#7fb881' },
]

const menuLinks = [
  { title: 'style', color: '#57c4ff31' },
  { title: 'fashion', color: '#da85c731' },
  { title: 'food', color: '#7fb88133' },
  { title: 'travel', color: '#ff795736' },
  { title: 'culture', color: '#ffb04f45' },
  { title: 'coding', color: '#5e4fff31' },
]

const Menu = () => {
  return (
    <div className='basis-1/3 mt-14  ' >
      <h2 className='text-xs mb-1' >What's Hot</h2>
      <h1 className='text-xl font-semibold text-black dark:text-slate-400 ' >
        Most Popular
      </h1>
      <div className='mt-8 mb-11 flex flex-col gap-8 ' >
        {dummyPosts.map((item, i) => (
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
        {menuLinks.map((item, i) => (
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
        {dummyPosts.map((item, i) => (
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