import { Inter } from 'next/font/google'
import Home from './home'

const inter = Inter({ subsets: ['latin'] })

export default function app() {
  return (
    <>
      <Home />
    </>
  )
}
