import React from 'react'

import CardList from '@/components/CardList'
import Menu from '@/components/Menu'

// /blog?cat=sport

const BlogPage = ({ searchParams }) => {
  
  return (
    <div className={'bg-slate-100 dark:bg-blue-500 dark:bg-opacity-30 min-h-screen '}>
      <h1 className={'bg-orange-400 text-white py-1 px-2 capitalize text-center '}>Category Blog</h1>
      <div className={'flex gap-12'}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default BlogPage