import { Header } from './components/Header.jsx'
import './globals.css'
import { Poppins } from 'next/font/google'



const inter = Poppins({ subsets: ['latin'] ,weight:["400"]})

export const metadata = {
  title: 'Arel media ',
  description: 'web development',
  keywords:"react,css",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
      <main className='container'>{children}</main>
      </body>
    </html>
  )
}
