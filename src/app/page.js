"use client"

import Image from 'next/image'
import Link from 'next/link'

import Featured from '@/components/Featured'
import CategoryList from '@/components/CategoryList'
import CardList from '@/components/CardList'
import Menu from '@/components/Menu'
import { useRef } from 'react'


const Home = () => {

  const divRef = useRef()

  const scrollClick = () => {
    divRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className=' bg-slate-100 dark:bg-blue-500 dark:bg-opacity-30 min-h-screen' >
      <Featured />
      <CategoryList />
      <div className='flex flex-col lg:flex-row gap-12 mt-8 ' >
        <CardList clickHandler={scrollClick}  />
        <Menu menuRef={divRef} />
      </div>
    </div>
  )
}

export default Home
