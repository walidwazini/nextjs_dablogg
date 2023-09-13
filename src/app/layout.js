import './globals.css'
import { Inter } from 'next/font/google'

import { Navbar, Footer } from '../components'
// import { ThemeContextProvider } from '@/contexts/ThemeContext'
import { NewThemeProvider } from './theme-provider'
import AuthProvider from '@/providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  icons: { icon: '/favicon.ico' },
  title: 'Dablogg',
  description: 'Simple blog app.',
}

export default function RootLayout({ children }) {


  return (
    <html suppressHydrationWarning={true} lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
      </head>
      <body className={inter.className}>
        <AuthProvider>

          <NewThemeProvider attribute='class' defaultTheme='system' enableSystem >
            <div className={''} >
              <div className='min-h-screen dark:bg-[#2d405c] bg-white ' >
                <div
                  className={` mx-auto px-20
              lg:max-w-3xl lg:px-10  md:max-w-[720px]
              xl:max-w-[1024px] 2xl:max-w-[1366px] 
              `}
                >
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </div>
          </NewThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
