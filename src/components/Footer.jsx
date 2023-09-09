import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={'mt-12 py-5 px-1 flex flex-col md:flex-row gap-12 md:gap-0 '}>
      <div className={'flex-1 flex flex-col gap-3 '}>
        <div className={'flex items-center gap-2 '}>
          {/* <Image src="/logo.png" alt="lama blog" width={50} height={50} /> */}
          <h1 className={'text-2xl'}>Dablogg</h1>
        </div>
        <p className={'text-xs lg:text-base font-light '}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className={'mt-2 flex gap-2 '}>
          {/* Social Icon  */}
        </div>
      </div>
      <div className={'flex-1 flex flex-row justify-between text-xs lg:text-base md:justify-end gap-12 lg:gap-24 mb-4 w-full md:w-auto '}>
        <div className={'flex flex-col gap-2 font-light '}>
          <span className={'font-bold'}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={'flex flex-col gap-2 font-light '}>
          <span className={'font-bold'}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={'flex flex-col gap-2 font-light '}>
          <span className={'font-bold'}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>

      </div>
    </div>
  )
}

export default Footer