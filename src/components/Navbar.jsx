"use client"

import React, { useEffect, useState } from 'react'
import { BiLogoTwitter, BiLogoInstagram, BiLogoYoutube, BiMenu } from 'react-icons/bi'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import { useTheme } from 'next-themes'

import Link from 'next/link'

const NewThemeSwitcher = ({size}) => {
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
      className='bg-transparent dark:hover:text-blue-500 hover:bg-slate-400 text-lg p-1 rounded-md'
    >
      {theme === 'light' ? <BsMoonFill size={size} /> : <BsSunFill size={size} />}
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
      <div className='text-left md:text-center text-xl xl:text-2xl' >
        <div className='capitalize font-bold' >
          dablogg
        </div>
      </div>
      <div className='hidden lg:flex items-center justify-between gap-3' >
        <NewThemeSwitcher />
        {links.map((item, i) => (
          <div key={i} className='text-md capitalize hover:text-slate-500 dark:hover:text-blue-500 hover:underline cursor-pointer ' >
            <Link href={'/'} >
              {item.title}
            </Link>
          </div>
        ))}
        <button className='text-md px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-500' >
          Login
        </button>
      </div>
      <div className='flex lg:hidden' >
        <button
          onClick={openMenuHandler}
          className=' cursor-pointer text-black hover:bg-gray-100 rounded-full p-1 dark:text-white  ' >
          {!openMenu ? <BiMenu size={30} /> : <IoMdClose size={30} />}
        </button>
        {openMenu && (
          <div className='absolute top-16 right-20 w-48 dark:bg-[#34507a] bg-slate-200 divide-y divide-black hover:cursor-pointer' >
            <div className='hover:dark:bg-[#446699] p-4 ' >
            <NewThemeSwitcher size={30} />
            </div>
            {links.map((item, i) => (
              <div key={i} className='hover:bg-slate-100 hover:dark:bg-[#446699] hover:underline capitalize p-4 text-xl' >
                {item.title}
              </div>
            ))}
            <div className='hover:bg-slate-100 hover:font-semibold text-center hover:dark:bg-[#446699] text-xl p-4' >
              Login
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar