"use client"

import React, { useState } from 'react'
import { BiLogoTwitter, BiLogoInstagram, BiLogoYoutube, BiMenu } from 'react-icons/bi'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { FcMenu } from 'react-icons/fc'

const links = [
  { link: '/', title: 'homepage' },
  { link: '/', title: 'contact' },
  { link: '/', title: 'about' },
]

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  const themeHandler = () => {
    setDarkTheme(prevState => !prevState)
  }


  return (
    <div className='flex items-center justify-between h-24 px-1 ' >
      <div className='hidden lg:flex gap-2 text-lg' >
        <BiLogoInstagram className=' ' />
        <BiLogoTwitter />
        <BiLogoYoutube />
      </div>
      <div className='text-left md:text-center text-sm xl:text-xl' >
        <div className='capitalize font-light' >
          dablogg
        </div>
      </div>
      <div className='hidden md:flex items-center justify-between gap-3' >
        <button onClick={themeHandler} className=' bg-slate-200 hover:bg-slate-400 text-xs p-1 rounded-md' >
          {!darkTheme && <BsMoonFill />}
          {darkTheme && <BsSunFill />}
        </button>
        {links.map((item, i) => (
          <div key={i} className='text-xs capitalize hover:text-slate-500 hover:underline cursor-pointer ' > {item.title}</div>
        ))}
        <button className='text-xs p-1 rounded-md hover:bg-slate-100' >
          Login
        </button>
      </div>
      <div className='flex md:hidden' >
        <button
          onClick={() => {}}
          className='cursor-pointer text-black hover:bg-gray-100 rounded-full p-1 ' >
          <BiMenu />
        </button>
      </div>
    </div>
  )
}

export default Navbar