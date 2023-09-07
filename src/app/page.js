import Image from 'next/image'
import Link from 'next/link'

import Featured from '@/components/Featured'
import CategoryList from '@/components/CategoryList'
import CardList from '@/components/CardList'


export default function Home() {
  return (
    <div className=' bg-slate-100 dark:bg-blue-500 dark:bg-opacity-30 min-h-screen p-2' >
      <Featured />
      <CategoryList />
      <div className='flex gap-12 mt-8 ' >
        <CardList />
      </div>
    </div>
  )
}
