import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dablogg',
  description: 'Simple blog app.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='min-h-screen' >
          <div
            className={` mx-auto px-20
          lg:max-w-3xl lg:px-10  md:max-w-[640px]
          xl:max-w-[1024px] 2xl:max-w-[1366px] 
          `}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}