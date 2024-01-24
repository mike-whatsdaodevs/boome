import { Inter } from 'next/font/google'
import Home from './home'
import Mobile from './mobile';
import { useEffect, useState } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function App() {
  const [type, setType] = useState('pc')
  useEffect(() => {
    if (
      navigator.userAgent.match(/Mobi/i) ||
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/iPhone/i)
    ) {
      // 当前设备是移动设备
      setType('phone')
    } else {
      setType('pc')
    }
  }, [])
  return (
    <>
      {type === 'pc' ? <Home /> : <Mobile />}
    </>
  )
}
