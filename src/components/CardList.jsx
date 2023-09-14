// "use client"

import React from 'react'
import { AiOutlineDownCircle } from 'react-icons/ai'

import Card from './Card'
import Pagination from './Pagination'
import { DemoPosts2 } from '@/constant'

const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}

const CardList = async ({ clickHandler }) => {

  const data = await getData(1)

  return (
    <div className='basis-2/3 bg-blue-900 px-4 ' >
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
        {/* {DemoPosts2.map((item, i) => (
          <Card
            key={i}
            slug={i}
            catSlug={item.catSlug}
            title={item.title}
            createdAt={item.createdAt}
          />
        ))} */}
        {data?.map(item => (
          <Card
            key={item.id}
            slug={item.slug}
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