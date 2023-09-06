import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div className='bg-blue-600 min-h-screen' >
      <div className='flex gap-12 ' >
        <Link href={'/'} >
          Tempor magna Lorem enim qui incididunt nulla consectetur tempor sint est.
          Tempor magna Lorem enim qui incididunt nulla consectetur tempor sint est.
          Tempor magna Lorem enim qui incididunt nulla consectetur tempor sint est.
        </Link>
      </div>
    </div>
  )
}
