"use client"

import React from 'react'
import { AiOutlineDownCircle } from 'react-icons/ai'

import Card from './Card'
import Pagination from './Pagination'

const dummyPosts = [
  {
    createdAt: Date('2022-04-05'),
    title: 'Amrabat joined ManU',
    img: '',
    catSlug: 'sport',
    slug: Math.random()
  },
  {
    createdAt: Date('2022-06-05'),
    title: 'Travel to Jordan',
    img: '',
    catSlug: 'travel',
    slug: Math.random()
  },
  {
    createdAt: Date('2022-07-05'),
    title: 'Lemon-spice chicken recipe',
    img: '',
    catSlug: 'food',
    slug: Math.random()
  },
]

const CardList = ({ cardRef, clickHandler }) => {
  return (
    <div  className='basis-2/3 bg-blue-900 px-4 ' >
      <h1 className='mx-12 my-4 text-center md:text-start font-bold text-2xl' >Recent Posts</h1>
      <div className='relative' >
        <div className='md:hidden absolute bg-slate-500 bg-opacity-20 z-50 -top-5 right-0 p-3 rounded-lg flex flex-col items-center gap-2 ' >
          <div className='text-xs' >See what's popular..</div>
          <button onClick={clickHandler} className='hover:text-blue-600' >
            <AiOutlineDownCircle size={30} />
          </button>
        </div>
      </div>
      <div className='mt-16' >  {/* style.posts  */}
        {dummyPosts.map((item, i) => (
          <Card
            key={i}
            slug={i}
            catSlug={item.catSlug}
            title={item.title}
            createdAt={item.createdAt}
          />
        ))}
      </div>
      <Pagination />
    </div>
  )
}

export default CardList