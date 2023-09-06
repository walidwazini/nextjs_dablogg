"use client"

import React, { useEffect, useState } from 'react'
import { BiLogoTwitter, BiLogoInstagram, BiLogoYoutube, BiMenu } from 'react-icons/bi'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import { useTheme } from 'next-themes'

import Link from 'next/link'

const NewThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=' bg-slate-200 dark:bg-transparent dark:hover:text-blue-500 hover:bg-slate-400 text-lg p-1 rounded-md'
    >
      {theme === 'light' ? <BsMoonFill /> : <BsSunFill />}
    </button>
  )
}

const links = [
  { link: '/', title: 'homepage' },
  { link: '/', title: 'contact' },
  { link: '/', title: 'about' },
]

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)


  const themeHandler = () => {
    setDarkTheme(prevState => !prevState)
  }

  const openMenuHandler = () => setOpenMenu(prevState => !prevState)


  return (
    <div className='flex items-center justify-between h-24 px-1 ' >
      <div className='hidden lg:flex gap-2 text-lg' >
        <BiLogoInstagram className=' ' />
        <BiLogoTwitter />
        <BiLogoYoutube />
      </div>
      <div className='text-left md:text-center text-md xl:text-2xl' >
        <div className='capitalize font-bold' >
          dablogg
        </div>
      </div>
      <div className='hidden md:flex items-center justify-between gap-3' >
        <NewThemeSwitcher />
        {links.map((item, i) => (
          <div key={i} className='text-md capitalize hover:text-slate-500 dark:hover:text-blue-500 hover:underline cursor-pointer ' >
            <Link href={'/'} >
              {item.title}
            </Link>
          </div>
        ))}
        <button className='text-lg p-1 rounded-md hover:bg-slate-100 dark:hover:bg-blue-500' >
          Login
        </button>
      </div>
      <div className='flex md:hidden' >
        <button
          onClick={openMenuHandler}
          className=' cursor-pointer text-black hover:bg-gray-100 rounded-full p-1 dark:text-white  ' >
          {!openMenu ? <BiMenu size={25} /> : <IoMdClose size={25} />}
        </button>
        {openMenu && (
          <div className='absolute top-16 right-20 w-28 dark:bg-[#34507a] bg-slate-200 divide-y divide-black hover:cursor-pointer' >
            <div className='hover:dark:bg-[#446699] ' >
            <NewThemeSwitcher />
            </div>
            {links.map((item, i) => (
              <div key={i} className='hover:bg-slate-100 hover:dark:bg-[#446699] hover:underline capitalize p-2 text-[10px]' >
                {item.title}
              </div>
            ))}
            <div className='hover:bg-slate-100 hover:font-semibold hover:dark:bg-[#446699] text-[10px] p-2' >
              Login
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar