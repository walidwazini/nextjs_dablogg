import Featured from '@/components/Featured'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div className=' bg-slate-100 dark:bg-blue-500 dark:bg-opacity-30 min-h-screen' >
      <Featured />
      <div className='flex gap-12 ' >
      </div>
    </div>
  )
}
