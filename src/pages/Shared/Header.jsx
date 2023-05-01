import React from 'react'
import logo from '../Assets/logof.png'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='px-5 h-screen flex  items-center bg-slate-300 gap-10'>
        <div className='flex-col'>
          <h1 className='text-9xl tracking-widest font-sans font-bold text-white'>LOCAL</h1>
          <h1 className='text-9xl tracking-widest font-sans font-bold  text-white'>HOPES</h1>
          <h2 className='text-5xl mt-4 font-sans tracking-wider text-white'>TRAINING ACADEMY</h2>
          <h2 className='text-6xl mt-5 font-sans italic font-bold text-[#C9A643]'>Success Is A Habit</h2>
        </div>
        <div>
          <Image className='w-[600px]' src={logo} alt="Logo" />
        </div>
    </header>
  )
}

export default Header