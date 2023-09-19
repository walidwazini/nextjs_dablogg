import React from 'react'

import Card from './Card'
import Pagination from './Pagination'

const getData = async (page, category) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${category || ''}`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}

const CardList = async ({ currentPage, category }) => {
  const { posts, count } = await getData(currentPage, category)
  const POST_PER_PAGE = 2

  const hasPrev = POST_PER_PAGE * (currentPage - 1) > 0
  const hasNext = POST_PER_PAGE * (currentPage - 1) + POST_PER_PAGE < count

  return (
    <div className='basis-2/3 bg-blue-900 px-4 ' >
      <h1 className='mx-12 my-4 text-center md:text-start font-bold text-2xl' >Recent Posts</h1>
      <div className='mt-16' >  {/* style.posts  */}
        {posts?.map(item => (
          <Card
            key={item.id}
            slug={item.slug}
            catSlug={item.catSlug}
            title={item.title}
            createdAt={item.createdAt}
          />
        ))}
      </div>
      <Pagination page={currentPage} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  )
}

export default CardList