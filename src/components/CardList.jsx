import React from 'react'
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

const CardList = () => {
  return (
    <div className='basis-2/3' >
      <h1 className='mx-12 my-4 text-center md:text-start font-bold text-2xl' >Recent Posts</h1>
      <div>  {/* style.posts  */}
        {dummyPosts.map((item, i) => (
          <Card
            key={i}
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