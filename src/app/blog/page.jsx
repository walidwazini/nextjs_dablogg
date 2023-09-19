import React from 'react'

import CardList from '@/components/CardList'
import Menu from '@/components/Menu'

// /blog?cat=sport
const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed')
  }

  return res.json()
}

const BlogPage = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1
  const { cat } = searchParams
  const categoriesList = await getData()

  const selectedCat = categoriesList?.find(category => category.title === cat)

  return (
    <div className={'bg-slate-100 dark:bg-blue-500 dark:bg-opacity-30 min-h-screen '}>
      <div style={{backgroundColor:selectedCat?.colorScheme}} className={'text-white py-4 px-2 capitalize text-center '}>
        {cat} Blog
      </div>
      <div className={'flex gap-12'}>
        <CardList currentPage={page} category={cat} />
        <Menu />
      </div>
    </div>
  )
}

export default BlogPage