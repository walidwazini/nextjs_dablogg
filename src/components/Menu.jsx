import React from 'react'

import MenuPost from './MenuPost'

const dummyPosts = [
  {author: 'Donny', category: 'travel',color:'#ff7857'},
  {author: 'Carlos', category: 'coding',color:'#775aec'},
  {author: 'Yassine', category: 'food', color:'#7fb881'},
]

const Menu = () => {
  return (
    <div className='basis-1/3 mt-14  ' >
      <h2 className='text-xs mb-1' >What's Hot</h2>
      <h1 className='text-xl font-semibold text-black dark:text-slate-400 ' >
        Most Popular
      </h1>
      <div className='mt-8 mb-11 flex flex-col gap-8 ' >
       {dummyPosts.map((item,i) => (
        <MenuPost 
        key={i}
        author={item.author}
        category={item.category} bgColor={item.color}
        withImage={false}  
        />
       ))}
      </div>
    </div>
  )
}

export default Menu